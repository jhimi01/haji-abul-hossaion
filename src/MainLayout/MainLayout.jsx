import React from 'react';
import Navigation from '../component/Share/Navigation/Navigation';
import Footer from '../component/Share/Footer/Footer';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
    return (
        <>
        <Navigation />
       <div className='p-4'>
       <Outlet />
       </div>
        <Footer />
        </>
    );
};

export default MainLayout;