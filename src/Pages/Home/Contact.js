import React, { useState } from 'react';

const Contact = () => {
    const handleSubmit = event => {
        event.preventDefault();
        alert('We have received your query');
    }

    return (
        <div>
            <h2 className='p-2 m-2 bg-secondary font-bold text-xl'>Contact Us</h2>
            <form onSubmit={handleSubmit} >
                <div class="hero bg-base-100">
                    <div class="hero-content flex-col lg:flex-row-reverse">
                        <div class="text-center lg:text-left">
                            <h1 class="text-5xl font-bold text-blue-500">Chat with us!</h1>
                            <p class="py-6">Want to know more about us? Just write your email and query.
                                We will try to get back to you as soon as possible.</p>
                        </div>
                        <div class="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <div class="card-body">
                                <div class="form-control">
                                    <input name='email' type="email" placeholder="Your email" class="input input-bordered" required />
                                    <textarea name='description' type='text' class="textarea textarea-bordered mt-2" placeholder="Description" required></textarea>
                                </div>

                                <div class="form-control mt-6">
                                    <button class="btn btn-secondary">Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Contact;