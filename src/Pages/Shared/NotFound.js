import React from 'react';
import notFound from '../../images/404.png';

const NotFound = () => {
    return (
        <div className='container grid lg:grid-cols-2  justify-center items-center'>
            <div className='m-20'>
                <img src={notFound} alt="" />
            </div>
            <div>
                <h2 className='font-bold text-6xl text-red-500 mr-10'>OOPS!</h2>
            </div>
        </div>
    );
};

export default NotFound;