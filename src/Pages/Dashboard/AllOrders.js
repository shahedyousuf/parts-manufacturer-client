import React from 'react';

const AllOrders = ({ order, index }) => {
    const { orderName, image, price, available, quantity } = order;
    return (
        <tr>
            <th>{index + 1}</th>
            <td>{orderName}</td>
            <td>{quantity}</td>
            <td>{price}</td>
        </tr>
    );
};

export default AllOrders;