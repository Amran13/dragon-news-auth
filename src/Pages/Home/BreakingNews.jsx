import React from 'react';
import Marquee from 'react-fast-marquee';

const BreakingNews = () => {
    return (
        <div className='flex'>
            <button className="btn bg-rose-600">Breaking News</button>
            <Marquee className='ml-2' speed={100}>
                <p className='mr-8'>I can be a React component, multiple React components, or just some text.</p>
                <p className='mr-8'>I can be a React component, multiple React components, or just some text.</p>
                <p className='mr-8'>I can be a React component, multiple React components, or just some text.</p>
            </Marquee>
        </div>
    );
};

export default BreakingNews;