import React, { FC, useState } from 'react';
import classes from './MyCheckbox.module.scss';
import { CheckboxProps } from '../../../types/myCheckbox';

const MyCheckbox: FC<CheckboxProps> = ({name, title}) => {
    return (
        <label className={classes.checkbox__label}>
            <span className={classes.checkbox}></span>
            <input id={name} className={classes.checkbox__input} name={name} type='checkbox'></input>
            {title}
        </label>
    );
};

export default MyCheckbox;