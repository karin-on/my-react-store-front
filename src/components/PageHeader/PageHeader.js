import React from 'react';
import PropTypes from 'prop-types';
import classes from './PageHeader.scss';

const PageHeader = ({ mainHeaderTxt, children }) => (
    <div className={classes.Header}>
        <h2 className={classes.MainHeader}>{mainHeaderTxt}</h2>
        {children}
    </div>
);

PageHeader.propTypes = {
    mainHeaderTxt: PropTypes.string.isRequired,
    children: PropTypes.element,
};

PageHeader.defaultProps = {
    children: null,
};

export { PageHeader };
