import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const Purchase = () => {
    const { partsId } = useParams();
    const [part, setPart] = useState({});
    const [user, loading, error] = useAuthState(auth);

    useEffect(() => {
        const url = `http://localhost:5000/parts/${partsId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [])

    const handleOrder = event => {
        event.preventDefault();
        const quantity = event.target.quantity.value;
        const order = {
            orderId: part._id,
            orderName: part.name,
            orderImage: part.image,
            quantity,
            available: part.available,
            price: part.price,
            userName: user.displayName,
            userEmail: user.email,
            phone: event.target.phone.value
        }

        fetch('http://localhost:5000/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                toast('Order placed successfully');
            })
    }

    return (
        <div>
            <h2 className='p-2 m-2 bg-secondary font-bold text-xl'>Purchase page</h2>
            <h2 className='text-xl font-bold'>You are about to purchase: <p className='text-primary'>{part.name}</p></h2>
            <div className='flex justify-center items-center'>

                <div class="card w-96 bg-base-100 shadow-xl">
                    <figure class="px-10 pt-10">
                        <img src={part.image} alt="parts" class="rounded-xl" />
                    </figure>
                    <form onSubmit={handleOrder}>
                        <div class="card-body items-center text-center">
                            <p className='font-semibold'>{part.description}</p>
                            <p className='text-violet-500'>Minimum order quantity: {part.quantity}</p>
                            <input type="number" name="quantity" className="input input-bordered w-full max-w-xs mb-2" placeholder='Your order' />
                            <p className='text-violet-500'>Available quantity: {part.available}</p>
                            <p className='text-violet-500'>Price: <span className='font-bold'>${part.price}</span></p>

                            <input type="text" name="name" className="input input-bordered w-full max-w-xs mb-2" disabled value={user?.displayName} />
                            <input type="email" name="email" className="input input-bordered w-full max-w-xs mb-2" disabled value={user?.email} />
                            <input type="number" name="phone" className="input input-bordered w-full max-w-xs mb-2" placeholder='Phone number' />
                            <input type="submit" value="Order" className='btn btn-secondary w-full max-w-xs' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Purchase;