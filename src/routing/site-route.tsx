import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from '../modules/Layout';
import { PrivateRoute } from './private-route';
// import r from 'react-dom';

// const Layout = React.lazy(() => import('../modules/Layout'));
const LoginPage = React.lazy(() => /* webpackChunkName: "Login" */ import("../modules/Authentication/_route"));
const HomePage = React.lazy(() => /* webpackChunkName: "Home" */  import('../modules/Home'));
const EventsPage = React.lazy(() => /* webpackChunkName: "Events" */  import('../modules/Events'));
const AboutPage = React.lazy(() => /* webpackChunkName: "About" */  import('../modules/About'));
const ContactPage = React.lazy(() => /* webpackChunkName: "Contact" */  import('../modules/Contact'));
const ProfilePage = React.lazy(() => /* webpackChunkName: "Profile" */  import('../modules/Profile'));
const AddEventPage = React.lazy(() => /* webpackChunkName: "Profile" */  import('../modules/AddEvent'));


const SiteRouter = () => (
  <BrowserRouter>
    <Suspense>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route path='/login/*' element={<LoginPage />} />
            <Route path='/' element={<HomePage />} />
            <Route path='/Home' element={<HomePage />} />
            <Route path='/Events' element={<EventsPage />} />
            <Route path='/About' element={<AboutPage />} />
            <Route path='/Contact' element={<ContactPage />} />
            <Route path='/Profile' element={<PrivateRoute component={<ProfilePage />} />} />
            <Route path='/Addevent' element={<AddEventPage />} />

            <Route path='*' element={<Navigate to="/" />} />
          </Route> 
        </Routes>
    </Suspense>
  </BrowserRouter>
) 

export default SiteRouter;