import React from 'react';
import classes from './Taxonomies.scss';

const Taxonomies = () => {
    const taxWomenClasses = [classes.Taxonomy, classes.Women];
    const containerClasses = [classes.Container, classes.TaxContainer];

    return (
        <section className={classes.Taxonomies}>
            <div className={containerClasses.join(' ')}>
                <div className={classes.TaxonomiesInner}>
                    <div className={classes.Taxonomy}>
                        <h3 className={classes.TaxonomyTitle}>Men</h3>
                    </div>
                    <div className={taxWomenClasses.join(' ')}>
                        <h3 className={classes.TaxonomyTitle}>Women</h3>
                    </div>
                    <div className={classes.Taxonomy}>
                        <h3 className={classes.TaxonomyTitle}>Kids</h3>
                    </div>
                </div>
            </div>
        </section>
    );
};

export { Taxonomies };
