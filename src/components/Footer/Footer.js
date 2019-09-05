import React from 'react';
import classNames from 'classnames';
import classes from './Footer.scss';

const Footer = () => {
    const containerClasses = classNames(
        classes.Container,
        classes.FooterContainer,
    );

    return (
        <footer className={classes.Footer}>
            <div className={containerClasses}>
                <span>&copy; 2019 nologo</span>
            </div>
        </footer>
    );
};

export { Footer };
