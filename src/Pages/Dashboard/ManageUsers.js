import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import AllUsers from './AllUsers';

const ManageUsers = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/user', {
        method: 'GET',
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading />
    }
    return (
        <div>
            <h2>All users: {users.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th>No</th>
                            <th>Email</th>
                            <th>Role</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => <AllUsers
                                key={user._id}
                                refetch={refetch}
                                index={index}
                                user={user}
                            ></AllUsers>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageUsers;