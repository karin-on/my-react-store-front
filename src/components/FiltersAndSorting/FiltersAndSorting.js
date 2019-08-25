import React from 'react';
import classes from './FiltersAndSorting.scss';

const FiltersAndSorting = () => {
    const slidersIconClasses = [
        'fa fa-sliders fa-lg',
        classes.SlidersIcon,
    ];

    const angleIconClasses = [
        'fa fa-angle-down fa-lg',
        classes.AngleIcon,
    ];

    return (
        <div className={classes.FiltersAndSorting}>
            <button type="button" className={classes.Button}>
                <i className={slidersIconClasses.join(' ')} aria-hidden="true" />
                Filters
                <i className={angleIconClasses.join(' ')} aria-hidden="true" />
            </button>
            <button type="button" className={classes.Button}>
                Sort
                <i className={angleIconClasses.join(' ')} aria-hidden="true" />
            </button>
        </div>
    );
};


export { FiltersAndSorting };
