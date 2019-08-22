import React from 'react';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Layout = (props) => {
    // eslint-disable-next-line
    const { children } = props;

    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export { Layout };
