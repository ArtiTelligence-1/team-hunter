import React, { ReactElement } from 'react';

import '../../styles/css/style.css';
// import '../../styles/sass/_header.scss';
// import '../../styles/sass/_footer.scss';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }: {children: ReactElement<any, any>}) => {
    return (
        <>
        <Header />
            {children}
        <Footer />
        </>
    )
}

export default MainLayout;