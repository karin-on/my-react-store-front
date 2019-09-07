import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import classes from './Header.scss';

const Header = () => {
    const containerClasses = classNames(
        classes.Container,
        classes.HeaderContainer,
    );
    const navBtnClasses = classNames(
        classes.Button,
        classes.NavButton,
    );
    const searchBtnClasses = classNames(
        classes.Button,
        classes.SearchButton,
    );
    const userBtnClasses = classNames(
        classes.Button,
        classes.UserButton,
    );
    const cartBtnClasses = classNames(
        classes.Button,
        classes.CartButton,
    );

    return (
        <header className={classes.Header}>
            <div className={containerClasses}>
                <button className={navBtnClasses} type="button">
                    <i className="fa fa-bars fa-lg" aria-hidden="true" />
                </button>
                <button className={searchBtnClasses} type="button">
                    <i className="fa fa-search fa-lg" aria-hidden="true" />
                </button>

                <h1 className={classes.Logo}>
                    <Link to="/" className={classes.LogoLink}>
                        nologo
                    </Link>
                </h1>

                <button className={userBtnClasses} type="button">
                    <i className="fa fa-user-o fa-lg" aria-hidden="true" />
                </button>
                <button className={cartBtnClasses} type="button">
                    <i className="fa fa-shopping-bag fa-lg" aria-hidden="true" />
                </button>
            </div>
        </header>
    );
};

export { Header };
