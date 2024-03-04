import React from 'react';
import { FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter } from "react-icons/fa";
import qZone1 from '../../../assets/qZone1.png'
import qZone2 from '../../../assets/qZone2.png'
import qZone3 from '../../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div>
            <div className='mx-auto space-y-2 mb-6'>
                <h2 className='p-6 text-2xl font-semibold'>Login With</h2>
                <div className='text-center'>
                    <button className="btn btn-outline btn-wide mb-2">
                        <FaGoogle />
                        Google
                    </button>
                    <button className="btn btn-outline btn-wide">
                        <FaGithub />
                        Github
                    </button>
                </div>
            </div>

            <div className='mx-auto space-y-2 mb-6 p-6'>
                <h2 className='text-2xl font-semibold'>Find Us On</h2>
                <div className='text-center'>
                    <a className='flex items-center text-xl font-medium border p-3' href='#'>
                        <FaFacebook className='mr-2' />Facebook</a>
                    <a className='flex items-center text-xl font-medium border p-3' href='#'>
                        <FaTwitter className='mr-2' />Twitter </a>
                    <a className='flex items-center text-xl font-medium border p-3' href='#'>
                        <FaInstagram className='mr-2' />Instagram </a>
                </div>
            </div>

            <div className='bg-zinc-300'>
                <h2 className='text-2xl font-semibold p-6'>Q Zone</h2>
                <div>
                    <div>
                        <img className='mx-auto' src={qZone1} alt="image" />
                    </div>
                    <div>
                        <img className='mx-auto' src={qZone2} alt="image" />
                    </div>
                    <div>
                        <img className='mx-auto' src={qZone3} alt="image" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default RightSideNav;