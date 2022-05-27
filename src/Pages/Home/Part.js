import React from 'react';

const Part = ({ part }) => {
    const { _id, name, image, description, quantity, available, price } = part;

    return (
        <div class="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure class="px-10 pt-10">
                <img src={image} alt="parts" class="rounded-xl" />
            </figure>
            <div class="card-body items-center text-center">
                <h2 class="card-title font-bold text-xl text-gray-500">{name}</h2>
                <p><small>{description}</small></p>
                <p className='text-violet-500'>Minimum order quantity: {quantity}</p>
                <p className='text-violet-500'>Available quantity: {available}</p>
                <p className='text-violet-500'>Price: <span className='font-bold'>${price}</span></p>
                <div class="card-actions">
                    <button class="btn btn-secondary hover:bg-yellow-600">Place order</button>
                </div>
            </div>
        </div>
    );
};

export default Part;