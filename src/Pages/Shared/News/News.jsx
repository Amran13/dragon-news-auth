import React from 'react';
import { Link } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { FaEye } from "react-icons/fa";




const News = ({ news }) => {
    console.log(news)
    const { title, author, thumbnail_url, image_url, details, rating, total_view } = news;
    return (
        <div className="card lg:w-full px-4 bg-base-100 shadow-xl my-4">
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <figure><img src={image_url} alt="News" /></figure>
                <p> {details.slice(0, 350)}... <Link className='text-orange-600'>Read More</Link> </p>
                <hr />
                <div className="card-actions flex justify-between">
                    <div className='flex items-center'>
                        <Rating style={{ maxWidth: 100 }} readOnly={true} value={rating.number}>  </Rating>
                        <p className='ml-2'> {rating.number} </p>
                    </div>
                    <div className='flex items-center'>
                        <FaEye></FaEye>
                        <p className='ml-2'> {total_view}  </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default News;