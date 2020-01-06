import React from 'react';
import classNames from 'classnames';
import classes from './ColorsAndSizes.scss';

const ColorsAndSizes = () => {
    const colorIconClassesWhite = classNames(classes.ColorIcon, classes.White);
    const colorIconClassesBlack = classNames(classes.ColorIcon, classes.Black);
    const colorIconClassesNavy = classNames(classes.ColorIcon, classes.Navy);
    const colorIconClassesPink = classNames(
        classes.ColorIcon,
        classes.Pink,
        { [classes.ActiveColor]: true },
    );

    const sizeIconClasses = classNames(
        classes.SizeIcon,
        { [classes.ActiveSize]: true },
    );

    return (
        <div className={classes.ColorsAndSizes}>
            <div className={classes.ColorsAndSizesPart}>
                <h4 className={classes.ColorsAndSizesHeader}>
                    <span>Color:</span>
                    <span className={classes.ChosenValue}>Pink</span>
                </h4>
                <div>
                    <button className={colorIconClassesWhite} type="button" aria-label="White" />
                    <button className={colorIconClassesBlack} type="button" aria-label="Black" />
                    <button className={colorIconClassesNavy} type="button" aria-label="Navy" />
                    <button className={colorIconClassesPink} type="button" aria-label="Pink" />
                </div>
            </div>
            <div className={classes.ColorsAndSizesPart}>
                <h4 className={classes.ColorsAndSizesHeader}>
                    <span>Size:</span>
                    <span className={classes.ChosenValue}>XS</span>
                </h4>
                <div>
                    <button className={sizeIconClasses} type="button">XS</button>
                    <button className={classes.SizeIcon} type="button">S</button>
                    <button className={classes.SizeIcon} type="button">M</button>
                    <button className={classes.SizeIcon} type="button">L</button>
                    <button className={classes.SizeIcon} type="button">XL</button>
                    <button className={classes.SizeIcon} type="button">XXL</button>
                </div>
            </div>
        </div>
    );
};

export { ColorsAndSizes };
