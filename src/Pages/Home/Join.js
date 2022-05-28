import React from 'react';
import grow from '../../images/grow.png';

const Join = () => {
    return (
        <div class="hero">
            <div class="hero-content flex-col lg:flex-row-reverse">
                <img src={grow} class="max-w-sm rounded-lg shadow-2xl" alt='community' />
                <div>
                    <h1 class="text-5xl font-bold text-blue-500">Grow with us!</h1>
                    <p class="py-6">The Urban Camera parts Manufacturer more than a manufacturing gig. We provide opportunities for creatives to connect with customers and their peers in meaningful ways. With a wide variety of project niches, there is something for everyone on our Platform. </p>
                    <button class="btn btn-secondary">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Join;