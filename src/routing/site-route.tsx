import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import r from 'react-dom';

const Layout = React.lazy(() => import('../modules/Layout'));
const HomePage = React.lazy(() => /*webpackChunkName: “Home” */  import('../modules/Home'));
const AboutPage = React.lazy(() => /*webpackChunkName: “About” */  import('../modules/About'));
const ContactPage = React.lazy(() => /*webpackChunkName: “Contact” */  import('../modules/Contact'));


const SiteRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout><HomePage /></Layout>} />
            <Route path='/About' element={<Layout><AboutPage /></Layout>} />
            <Route path='/Contact' element={<Layout><ContactPage /></Layout>} />
        </Routes>
    </BrowserRouter>
) 

export default SiteRouter;