import React from 'react';

const Review = ({ rev }) => {
    const { name, image, rating, review } = rev;

    return (
        <div class="card  bg-base-100 shadow-xl">
            <div>
                <div class="avatar">
                    <div class="w-24 rounded-full mt-4 ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={image} alt='users' />
                    </div>
                </div>
            </div>
            <div class="card-body">
                <p className='text-center text-xl font-bold text-blue-500'>{name}</p>
                <p>Rating: <span className='font-bold'>{rating}</span></p>
                <p className='text-gray-500'>Review: {review}</p>
            </div>
        </div>
    );
};

export default Review;