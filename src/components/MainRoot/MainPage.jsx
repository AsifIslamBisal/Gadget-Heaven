import React from 'react';

import Footer from '../../footer/Footer';
import { Outlet } from 'react-router-dom';
import Top from '../../navbar/Top';
const MainPage = () => {
    return (
        <div>
            
            <Top></Top>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
        
    );
};

export default MainPage;