import React from 'react';

const GetFreeEstimate = () => {
    return (
        <div className='bg-neutral mt-[-50px] z-20 relative max-w-7xl rounded mx-auto p-10'>
            <h2 className='text-2xl'>Get Free Estimate</h2>
            <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-2">
            <input type="text" placeholder="Type here" class="input" />
            <input type="text" placeholder="Type here" class="input" />
            <input type="text" placeholder="Type here" class="input" />
            <input type="text" placeholder="Type here" class="input " />
            <input type="text" placeholder="Type here" class="input" />
            <input type="text" placeholder="Type here" class="input" />
            <input type="text" placeholder="Type here" class="input" />
            <input type="text" placeholder="Type here" class="input" />
            </div>
        </div>
    );
};

export default GetFreeEstimate;