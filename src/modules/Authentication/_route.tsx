import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import Login from './Login';

const LoginRouter = () => (
  <Routes>
    <Route path="signin" element={<Login />} />

    <Route path="*" element={<Navigate to="signin" />} />
  </Routes>
);

export default LoginRouter;
