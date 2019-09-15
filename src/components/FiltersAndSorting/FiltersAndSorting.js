import React from 'react';
import classNames from 'classnames';
import classes from './FiltersAndSorting.scss';

const FiltersAndSorting = () => {
    const containerClasses = classNames(
        classes.Container,
        classes.FiltAndSortContainer,
    );
    const slidersIconClasses = classNames(
        'fa', 'fa-sliders-h', 'fa-lg',
        classes.SlidersIcon,
    );
    const angleIconClasses = classNames(
        'fa', 'fa-angle-down', 'fa-lg',
        classes.AngleIcon,
    );

    return (
        <div className={classes.FiltersAndSorting}>
            <div className={containerClasses}>
                <button type="button" className={classes.Button}>
                    <i className={slidersIconClasses} aria-hidden="true" />
                    Filters
                    <i className={angleIconClasses} aria-hidden="true" />
                </button>
                <button type="button" className={classes.Button}>
                    Sort
                    <i className={angleIconClasses} aria-hidden="true" />
                </button>
            </div>
        </div>
    );
};

export { FiltersAndSorting };
