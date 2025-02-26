import React from 'react';
import Navber from '../navbar/Navber';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom';
import Hero from '../navbar/Hero';
import Cards from './Cards';
const Nav = () => {
    return ( 
        <div>
            <div className='relative'>
            <div className=''><Navber></Navber></div>
            <div className=' w-full max-w-[500px]  absolute bottom-0 left-1/2 -translate-x-[720px]'><Hero></Hero></div>
            </div>
        </div>
    );
};

export default Nav;