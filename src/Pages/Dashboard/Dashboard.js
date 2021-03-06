import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../hooks/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin, setAdmin] = useAdmin(user);

    return (
        <div class="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content">
                <h2 className='text-2xl font-bold text-primary'>Dashboard</h2>
                <Outlet />
            </div>
            <div class="drawer-side">
                <label for="dashboard-sidebar" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
                    <li><Link to='/dashboard'>My orders</Link></li>
                    <li><Link to='/dashboard/addreview'>Add a review</Link></li>
                    <li><Link to='/dashboard/profile'>My profile</Link></li>
                    {<li><Link to='/dashboard/allorders'>Manage orders</Link></li>}
                    {<li><Link to='/dashboard/allusers'>Manage users</Link></li>}
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;