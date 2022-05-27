import React from 'react';
import Footer from '../Shared/Footer';
import Banner from './Banner';
import BusinessSummary from './BusinessSummary';
import Parts from './Parts';
import Reviews from './Reviews';

const Home = () => {
    return (
        <div>
            <h2 className='p-2 m-2 bg-secondary font-bold text-xl'>Camera parts you are looking for!</h2>
            <Banner></Banner>
            <Parts></Parts>
            <BusinessSummary></BusinessSummary>
            <Reviews></Reviews>
            <Footer></Footer>
        </div>
    );
};

export default Home;