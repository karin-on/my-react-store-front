import React from 'react';
import { Link } from 'react-router-dom';

import classes from './Breadcrumps.scss';

const Breadcrumps = () => (
    <div className={classes.Breadcrumps}>
        <Link to="/" className={classes.Link}>Home</Link>
        <i className="fa fa-angle-right" aria-hidden="true" />
        <span>T-shirts</span>
    </div>
);

export { Breadcrumps };
