import React from 'react';
import banner from "../assets/banner.jpg"
const Hero = () => {
    return (
        <div className='w-[700px] h-[195px]  ml-96 rounded-xl     bg-white/20 border border-white backdrop-blur-xl p-4  shadow-xl'>
            <img src={banner} alt="" />
        </div>
    );
};

export default Hero;