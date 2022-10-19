import React, { ReactElement } from 'react';

import '../../styles/css/style.less';
// import '../../styles/sass/_header.scss';
// import '../../styles/sass/_footer.scss';
import Header from '../Header';
import Footer from '../Footer';

const MainLayout = ({ children }: {children: ReactElement<any, any>}) => {
    return (
        <>
        <Header />
            <React.Suspense fallback={<>...</>}>{children}</React.Suspense>
        <Footer />
        </>
    )
}

export default MainLayout;