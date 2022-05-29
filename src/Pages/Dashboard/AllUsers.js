import React from 'react';
import { toast } from 'react-toastify';

const AllUsers = ({ user, index, refetch }) => {
    const { userEmail, role } = user;

    const makeAdmin = () => {
        fetch(`http://localhost:5000/user/admin/${userEmail}`, {
            method: 'PUT',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => {
                if (res.status === 403) {
                    toast.error('Failed to make an admin');
                }
                return res.json()
            })
            .then(data => {
                if (data.modifiedCount > 1) {
                    refetch();
                    toast.success(`${userEmail} made an admin successfully`);
                }
            })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>{userEmail}</td>
            <td>{role !== 'admin' && <button onClick={makeAdmin} class="btn btn-xs btn-secondary">Make admin</button>}</td>
        </tr>
    );
};

export default AllUsers;