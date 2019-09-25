import React from 'react';
import PropTypes from 'prop-types';
import classes from './PageSubheader.scss';

const PageSubheader = ({ subheaderTxt }) => (
    <h3 className={classes.Subheader}>
        {subheaderTxt}
    </h3>
);

PageSubheader.propTypes = {
    subheaderTxt: PropTypes.string.isRequired,
};

export { PageSubheader };
