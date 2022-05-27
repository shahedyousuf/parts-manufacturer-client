import React from 'react';
import banner from '../../images/banner/banner.png';

const Banner = () => {
    return (
        <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
            <div class="carousel-inner relative w-full overflow-hidden">
                <div class="carousel-item active relative float-left w-full">
                    <img
                        src={banner}
                        class="block w-full"
                        alt="Wild Landscape"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;