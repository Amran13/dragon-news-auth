import React, { useContext, useEffect, useState } from 'react';
import Header from '../Shared/Header/Header'
import Navbar from '../Shared/Navbar/Navbar'
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav'
import RightSideNav from '../Shared/RightSideNav/RightSideNav'
import BreakingNews from './BreakingNews';
import Marquee from "react-fast-marquee";
import News from '../Shared/News/News';
import { authContext } from '../../Provider/AuthProvider/AuthProvider';
import { Toaster, toast } from 'react-hot-toast';
import { useLoaderData } from 'react-router-dom';


const Home = () => {
    const authInfo = useContext(authContext)
    const {user} = authInfo 
    // const [newsApi, setNewsApi] = useState([])
    const newsData = useLoaderData()



    
    return (
        <div className=''>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>
            <Toaster></Toaster>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-6 relative'>
                <div className='grid col-span-1 border self-start sticky top-0'>
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className='md:col-span-2 border'>
                    <h2 className="text-2xl font-bold m-4">Dragon news home</h2>
                    {
                        newsData.map(item => <News news={item} key= {item._id}></News>)
                    }
                </div>

                <div className='col-span-1 border self-start sticky top-0'>
                    <RightSideNav className=""></RightSideNav>
                </div>
            </div>
        </div>
    );
};

export default Home;