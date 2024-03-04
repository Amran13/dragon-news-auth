import React from 'react';
import Header from '../Shared/Header/Header';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import { useParams } from 'react-router-dom';
import '@smastrom/react-rating/style.css';


const NewsDetails = () => {
    const { newsId } = useParams();
    console.log(newsId)


    return (
        <div>
            <div>
                <Header></Header>
            </div>

            <div className='grid grid-cols-4 mx-auto gap-8'>
                <div className='col-span-3 border'>
                    <h2 className='text-3xl font-bold text-center'> Dragon News </h2>
                    
                </div>
                <div className='col-span-1 border'>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default NewsDetails;