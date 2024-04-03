import React, { FC, useMemo } from 'react';
import { CheckboxProps } from '../../types/myCheckbox';
import classes from './CurrencyList.module.scss';
import MyCheckbox from '../UI/checkbox/MyCheckbox';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { addEuroAction } from '../../store/reducers/euroReducer';
import { addDollarAction } from '../../store/reducers/dollarReducer';
import { addYuanAction } from '../../store/reducers/yuanReducer';

const CurrencyList: FC = () => {
    const {isEuroChecked} = useTypedSelector(state => state.euro);
    const {isDollarChecked} = useTypedSelector(state => state.dollar);
    const {isYuanChecked} = useTypedSelector(state => state.yuan);
    const dispatch = useDispatch();

    function changeEuroChecked(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(addEuroAction(e.target.checked));
    }
    function changeDollarChecked (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(addDollarAction(e.target.checked));
    }
    const changeYuanChecked= (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addYuanAction(e.target.checked));
    }

    const currencyArr:CheckboxProps[] = [
        {title: 'Евро', name: 'eur', isChecked: isEuroChecked, changeChecked: changeEuroChecked}, 
        {title: 'Доллар', name: 'usd', isChecked: isDollarChecked, changeChecked: changeDollarChecked}, 
        {title: 'Юань', name: 'cny', isChecked: isYuanChecked, changeChecked: changeYuanChecked}
    ];
    return (
        <ul className={classes.chart__currency}>
            {currencyArr.map(currency =>
                <li key={currency.name} className={classes.chart__currencyItem}>
                    <MyCheckbox changeChecked={currency.changeChecked} isChecked={currency.isChecked} title={currency.title} name={currency.name}/>
                </li>
            )}
      </ul>
    );
};

export default CurrencyList;