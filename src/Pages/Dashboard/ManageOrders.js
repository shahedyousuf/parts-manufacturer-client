import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllOrders from '../Dashboard/AllOrders';

const ManageOrders = () => {
    const { data: orders, isLoading } = useQuery('orders', () => fetch('http://localhost:5000/orders').then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }

    return (
        <div>
            <h2>All orders: {orders.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order, index) => <AllOrders
                                key={order._id}
                                index={index}
                                order={order}
                            ></AllOrders>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageOrders;