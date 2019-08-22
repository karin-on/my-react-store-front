import React from 'react';
import classes from './Footer.scss';

const Footer = () => {
    const containerClasses = [classes.Container, classes.FooterContainer];

    return (
        <footer className={classes.Footer}>
            <div className={containerClasses.join(' ')}>
                <span>&copy; 2019 nologo</span>
            </div>
        </footer>
    );
};

export { Footer };
