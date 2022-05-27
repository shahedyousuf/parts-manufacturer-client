import React from 'react';
import Review from './Review';
import user1 from '../../images/users/user1.png';
import user2 from '../../images/users/user2.png';
import user3 from '../../images/users/user3.png';

const Reviews = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Shahed',
            rating: 5,
            review: 'Service was amazing. Looking forward for next.',
            image: user1
        },
        {
            _id: 2,
            name: 'Yousuf',
            rating: 4,
            review: 'Product was good. Hope it is better next time.',
            image: user2
        },
        {
            _id: 3,
            name: 'Sumon',
            rating: 5,
            review: 'Service was great. Hope to continue.',
            image: user3
        },
    ]
    return (
        <div>
            <h2 className='p-2 m-2 bg-secondary font-bold text-xl'>What our customers say!</h2>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-10'>
                {
                    reviews.map(rev => <Review
                        key={rev._id}
                        rev={rev}
                    ></Review>)
                }
            </div>
        </div>
    );
};

export default Reviews;