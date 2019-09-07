import React from 'react';
import PropTypes from 'prop-types';
import classes from './Layout.scss';

import { Header } from '../Header/Header';
import { Footer } from '../Footer/Footer';

const Layout = (props) => {
    const { children } = props;

    return (
        <div className={classes.PageContainer}>
            <Header />
            <main className={classes.ContentWrapper}>
                {children}
            </main>
            <Footer />
        </div>
    );
};

Layout.propTypes = {
    children: PropTypes.node.isRequired,
};


export { Layout };
