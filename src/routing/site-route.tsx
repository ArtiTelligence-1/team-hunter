import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainLayout from '../modules/Layout';
// import r from 'react-dom';

// const Layout = React.lazy(() => import('../modules/Layout'));
const HomePage = React.lazy(() => /*webpackChunkName: “Home” */  import('../modules/Home'));
const EventsPage = React.lazy(() => /*webpackChunkName: “Events” */  import('../modules/Events'));
const AboutPage = React.lazy(() => /*webpackChunkName: “About” */  import('../modules/About'));
const ContactPage = React.lazy(() => /*webpackChunkName: “Contact” */  import('../modules/Contact'));
const ProfilePage = React.lazy(() => /*webpackChunkName: “Profile” */  import('../modules/Profile'));


const SiteRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<MainLayout><HomePage /></MainLayout>} />
            <Route path='/Home' element={<MainLayout><HomePage /></MainLayout>} />
            <Route path='/Events' element={<MainLayout><EventsPage /></MainLayout>} />
            <Route path='/About' element={<MainLayout><AboutPage /></MainLayout>} />
            <Route path='/Contact' element={<MainLayout><ContactPage /></MainLayout>} />
            <Route path='/Profile' element={<MainLayout><ProfilePage /></MainLayout>} />
        </Routes>
    </BrowserRouter>
) 

export default SiteRouter;