import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../modules/Layout';
import PrivateRoute from './private-route';
// import r from 'react-dom';

// const Layout = React.lazy(() => import('../modules/Layout'));
const LoginPage = React.lazy(async () => /* webpackChunkName: "Login" */ await import('../modules/Authentication/_route'));
const HomePage = React.lazy(async () => /* webpackChunkName: "Home" */ await import('../modules/Home'));
const EventsPage = React.lazy(async () => /* webpackChunkName: "Events" */ await import('../modules/Events'));
const AboutPage = React.lazy(async () => /* webpackChunkName: "About" */ await import('../modules/About'));
const ContactPage = React.lazy(async () => /* webpackChunkName: "Contact" */ await import('../modules/Contact'));
const ProfilePage = React.lazy(async () => /* webpackChunkName: "Profile" */ await import('../modules/Profile'));
const AddEventPage = React.lazy(async () => /* webpackChunkName: "Profile" */ await import('../modules/AddEvent'));

const SiteRouter = () => (
  <BrowserRouter>
    <Suspense fallback="...">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/login/*" element={<LoginPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/Home" element={<HomePage />} />
          <Route path="/Events" element={<EventsPage />} />
          <Route path="/About" element={<AboutPage />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/Profile" element={<PrivateRoute component={<ProfilePage />} />} />
          <Route path="/Addevent" element={<AddEventPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </Suspense>
  </BrowserRouter>
);

export default SiteRouter;
