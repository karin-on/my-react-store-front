import React from 'react';
import classes from './Home.scss';
import { TopBanner } from '../TopBanner/TopBanner';
import { Taxonomies } from '../Taxonomies/Taxonomies';

const Home = () => (
    <main className={classes.Home}>
        <TopBanner />
        <Taxonomies />
    </main>
);

export { Home };
