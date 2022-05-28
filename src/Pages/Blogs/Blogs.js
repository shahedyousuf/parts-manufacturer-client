import React from 'react';
import './Blogs.css';

const Blogs = () => {
    return (
        <div className='blogs-container'>
            <h3 className='p-2 m-2 bg-secondary font-bold text-xl'>Blogs section</h3>
            <div className='blog grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 p-2'>
                <div>
                    <h2 className='font-bold text-blue-500 text-xl'>How to improve performance of React application?</h2>
                    <p>When it's necessary, keep component state local.
                        To avoid unwanted re-renders, memorize React components.
                        React code splitting with dynamic import ().To get the most out of React rendering, ensure sure components only get the props they require.

                    </p>
                </div>
                <div>
                    <h2 className='font-bold text-blue-500 text-xl'>What are the different ways to manage a state in a React application?</h2>
                    <p>The simplest type of state to manage in React is the local state.
                        The first tool you should use to handle state in your components is useState. Any acceptable data value, including primitive and object values, can be accepted.
                        In React, there are a variety of additional techniques to handle state s, including the use of- hooks, React Context API.
                    </p>
                </div>
                <div>
                    <h2 className='font-bold text-blue-500 text-xl'>How does prototypical inheritance work?</h2>
                    <p>
                        The ability to access object properties from another object is referred to as prototypical inheritance. To add new properties and methods to an existing object constructor, we utilize a JavaScript prototype. We may tell our JS code to inherit properties from a prototype in this way.
                    </p>
                </div>
                <div>
                    <h2 className='font-bold text-blue-500 text-xl'>Why you do not set the state directly in React?</h2>
                    <p>
                        Unidirectional Data Flow is followed by React. In other words, the data flow within react should and will be expected to be circular.
                        SetState() is a React function that takes an object of new states, compares and merges them with the existing state (similar to object.assign()), and adds the new state to the state data store.

                    </p>
                </div>
                <div>
                    <h2 className='font-bold text-blue-500 text-xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h2>
                    <p>By using for...of statement.</p>
                </div>
                <div>
                    <h2 className='font-bold text-blue-500 text-xl'>What is a unit test? Why should write unit tests?</h2>
                    <p>
                        Before writing code, unit testing allows developers to think about the software's design and what has to be done. This might assist them in staying concentrated and producing much better concepts.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;