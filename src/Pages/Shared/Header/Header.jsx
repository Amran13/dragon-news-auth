import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment/moment';

const Header = () => {
    const data = moment().format('LLLL'); // Sunday, March 3, 2024 1:35 PM

    return (
        <div className='text-center mt-12'>
            <img className='mx-auto' src={logo} alt="Logo" />
            <p className='font-light'>Journalism Without Fear or Favour</p>
            <p> {data} </p>
        </div>
    );
};

export default Header;