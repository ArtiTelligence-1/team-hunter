import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import r from 'react-dom';

const Layout = React.lazy(() => import('../modules/Layout'));
const HomePage = React.lazy(() => /*webpackChunkName: “Home” */  import('../modules/Home'));


const SiteRouter = () => (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Layout><HomePage /></Layout>} />
        </Routes>
    </BrowserRouter>
) 

export default SiteRouter;