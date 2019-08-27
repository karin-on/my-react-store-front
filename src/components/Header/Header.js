import React from 'react';
import { Link } from 'react-router-dom';
import classes from './Header.scss';

const Header = () => {
    const containerClasses = [classes.Container, classes.HeaderContainer];

    return (
        <header className={classes.Header}>
            <div className={containerClasses.join(' ')}>
                <button className={classes.Button} type="button">
                    <i className="fa fa-bars fa-lg" aria-hidden="true" />
                </button>
                <button className={classes.Button} type="button">
                    <i className="fa fa-search fa-lg" aria-hidden="true" />
                </button>

                <h1 className={classes.Logo}>
                    <Link to="/" className={classes.LogoLink}>
                        nologo
                    </Link>
                </h1>

                <button className={classes.Button} type="button">
                    <i className="fa fa-user-o fa-lg" aria-hidden="true" />
                </button>
                <button className={classes.Button} type="button">
                    <i className="fa fa-shopping-bag fa-lg" aria-hidden="true" />
                </button>
            </div>
        </header>
    );
};

export { Header };
