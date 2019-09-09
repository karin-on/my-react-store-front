import React from 'react';

import classes from './Descriptions.scss';

const Descriptions = () => (
    <div className={classes.Descriptions}>

        <div className={classes.DescriptionPart}>
            <h4 className={classes.DescriptionHeader}>Description</h4>
            <p className={classes.DescriptionPar}>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                At deserunt hic labore laboriosam maxime, mollitia officiis veritatis.
                Alias assumenda dolorem, dolorum, ducimus eos eveniet,
                fugit hic molestiae sit suscipit tempora totam ut voluptas!
                Aperiam architecto deserunt dolores, dolorum earum eveniet facere impedit
                itaque laborum nemo neque placeat quasi repellendus unde.
            </p>
        </div>
        <div className={classes.DescriptionPart}>
            <h4 className={classes.DescriptionHeader}>Details</h4>
            <p className={classes.DescriptionPar}>
                89% Polyester, 11% Elastane
            </p>
            <p className={classes.DescriptionPar}>
                Hand wash cold, only-chlorine bleach, lay flat to dry,
                do not iron, do not dry clean.
            </p>
        </div>

    </div>
);

export { Descriptions };
