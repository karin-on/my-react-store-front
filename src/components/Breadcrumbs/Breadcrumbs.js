import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Breadcrumbs.scss';

const Breadcrumbs = () => (
    <div className={classes.Breadcrumbs}>
        <div className={classes.Container}>
            <Link to="/" className={classes.Link}>Home</Link>
            <i className="fa fa-angle-right" aria-hidden="true" />
            <span>T-shirts</span>
        </div>
    </div>
);

export { Breadcrumbs };
