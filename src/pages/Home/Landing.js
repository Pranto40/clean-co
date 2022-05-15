import React from 'react';
import GetFreeEstimate from './GetFreeEstimate';

const Landing = () => {
    return (
        <>
        <div class="hero lg:h-[60vh] relative z-20 bg-accent mt-16">
            <div class="hero-content z-40 flex-col lg:flex-row">
                <div className=''>
                <p className='text-2xl'>Best Quality</p>
                <h1 class="text-5xl font-bold">Professional Cleaning Service</h1>
                <p class="py-6 max-w-2xl">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has</p>
                <button class="btn btn-primary">Get Started</button>
                </div>
                <div className="h-[60vh]">
                <img src="https://api.lorem.space/image/movie?w=260&h=400" class="h-full" alt='' />
                </div>
            </div>
        </div>
        <GetFreeEstimate />
        </>
    );
};

export default Landing;