import React from 'react';
// import 'font-awesome/scss/font-awesome.scss';
// import '../node_modules/font-awesome/css/font-awesome.min.css';
// import '../../../node_modules/font-awesome/scss/font-awesome.scss';
// import '../../../node_modules/font-awesome/scss/font-awesome.scss';
import classes from './Header.scss';

const Header = () => (
    <header className={classes.Header}>
        <span className={classes.Icon}>
            <i className="fa fa-bars fa-lg" aria-hidden="true" />
        </span>
        <span className={classes.Icon}>
            <i className="fa fa-search fa-lg" aria-hidden="true" />
        </span>

        <h1 className={classes.Logo}>nologo</h1>

        <span className={classes.Icon}>
            <i className="fa fa-user-o fa-lg" aria-hidden="true" />
        </span>
        <span className={classes.Icon}>
            <i className="fa fa-shopping-bag fa-lg" aria-hidden="true" />
        </span>
    </header>
);

export { Header };
