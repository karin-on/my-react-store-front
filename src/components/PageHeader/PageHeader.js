import React from 'react';
import classes from './PageHeader.scss';

const PageHeader = () => (
    <div className={classes.Header}>
        <div className={classes.Container}>
            <h2 className={classes.MainHeader}>T-shirts</h2>
            <h6 className={classes.Subheader}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corporis, possimus?
            </h6>
        </div>
    </div>
);

export { PageHeader };
