import React, { FC } from 'react';
import classes from './MyCheckbox.module.scss';
import { CheckboxProps } from '../../../types/myCheckbox';

const MyCheckbox: FC<CheckboxProps> = ({name, title, isChecked, changeChecked}) => {
    return (
        <label className={classes.checkbox__label}>
            <span className={classes.checkbox}></span>
            <input id={name} checked={isChecked} className={classes.checkbox__input} name={name} type='checkbox' onChange={(e: React.ChangeEvent<HTMLInputElement>)=>changeChecked(e)}></input>
            {title}
        </label>
    );
};

export default MyCheckbox;