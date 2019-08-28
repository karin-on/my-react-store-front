import React from 'react';
import classNames from 'classnames';
import classes from './Taxonomies.scss';

const Taxonomies = () => {
    const taxWomenClasses = classNames(
        classes.Taxonomy,
        classes.Women,
    );
    const taxMenAndKindClasses = classNames(
        classes.Taxonomy,
        classes.MenAndKids,
    );

    const containerClasses = classNames(
        classes.Container,
        classes.TaxContainer,
    );

    return (
        <section className={classes.Taxonomies}>
            <div className={containerClasses}>
                <div className={classes.TaxonomiesInner}>
                    <div className={taxMenAndKindClasses}>
                        <h3 className={classes.TaxonomyTitle}>Men</h3>
                    </div>
                    <div className={taxWomenClasses}>
                        <h3 className={classes.TaxonomyTitle}>Women</h3>
                    </div>
                    <div className={taxMenAndKindClasses}>
                        <h3 className={classes.TaxonomyTitle}>Kids</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Taxonomies };
