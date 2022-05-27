import React from 'react';
import { BsPeopleFill } from 'react-icons/bs';
import { FcCompactCamera } from 'react-icons/fc';
import { FcLike } from 'react-icons/fc';
import { BsGraphUp } from 'react-icons/bs';


const BusinessSummary = () => {
    return (
        <div>
            <h2 className='p-2 m-2 bg-secondary font-bold text-xl'>Our achievements so far!</h2>
            <div class="stats stats-vertical lg:stats-horizontal shadow mt-5 lg:gap-x-20">
                <div class="stat">
                    <div class="stat-figure text-primary text-5xl">
                        <BsPeopleFill />
                    </div>
                    <div class="stat-title text-4xl text-blue-600">Customers</div>
                    <div class="stat-value">50+</div>
                    <div class="stat-desc text-lg">Jan 1st - Nov 1st</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary text-5xl">
                        <BsGraphUp />
                    </div>
                    <div class="stat-title text-4xl text-yellow-600">Annual Revenue</div>
                    <div class="stat-value">10M+</div>
                    <div class="stat-desc text-lg">↗︎ 400 (22%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary text-5xl">
                        <FcLike />
                    </div>
                    <div class="stat-title  text-4xl text-slate-600">Reviews</div>
                    <div class="stat-value">12K+</div>
                    <div class="stat-desc text-lg">↗︎ 90 (14%)</div>
                </div>

                <div class="stat">
                    <div class="stat-figure text-primary text-5xl">
                        <FcCompactCamera />
                    </div>
                    <div class="stat-title text-4xl text-sky-600">Parts</div>
                    <div class="stat-value">40+</div>
                    <div class="stat-desc text-lg">↗︎ 90 (14%)</div>
                </div>

            </div>
        </div>
    );
};

export default BusinessSummary;