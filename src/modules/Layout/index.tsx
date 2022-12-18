import React, { ReactElement, Suspense } from 'react';

import '../../styles/css/style.less';
// import '../../styles/sass/_header.scss';
// import '../../styles/sass/_footer.scss';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Loader from '../../components/Loader';

const Layout = () => (
  <div>
    <Header />
    <Suspense fallback="...">
      <Outlet />
    </Suspense>
    <Footer />
  </div>
);

export default Layout;
