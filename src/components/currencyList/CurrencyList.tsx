import React, { FC } from 'react';
import { CheckboxProps } from '../../types/myCheckbox';
import classes from './CurrencyList.module.scss';
import MyCheckbox from '../UI/checkbox/MyCheckbox';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { addEuroAction } from '../../store/reducers/euroReducer';
import { addDollarAction } from '../../store/reducers/dollarReducer';
import { addYuanAction } from '../../store/reducers/yuanReducer';
import { getChartValues } from '../../store/action-creator/apiCounter';

const CurrencyList: FC = () => {
    const {isEuroChecked, rubRatesEuro, euroRate} = useTypedSelector(state => state.euro);
    const {isDollarChecked, rubRatesDollar, dollarRate} = useTypedSelector(state => state.dollar);
    const {isYuanChecked, rubRatesYuan, yuanRate} = useTypedSelector(state => state.yuan);
    const {dates} = useTypedSelector(state => state.chart);
    const dispatch = useDispatch();

    function changeEuroChecked(e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(addEuroAction(e.target.checked));
        if (rubRatesEuro.length === 0) {
            dispatch(getChartValues(dates, euroRate))
        }
    }
    function changeDollarChecked (e: React.ChangeEvent<HTMLInputElement>) {
        dispatch(addDollarAction(e.target.checked));
        if (rubRatesDollar.length === 0) {
            dispatch(getChartValues(dates, dollarRate))
        }
    }
    const changeYuanChecked= (e: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(addYuanAction(e.target.checked));
        if (rubRatesYuan.length === 0) {
            dispatch(getChartValues(dates, yuanRate))
        }
    }

    const currencyArr:CheckboxProps[] = [
        {title: 'Евро', name: euroRate, isChecked: isEuroChecked, changeChecked: changeEuroChecked}, 
        {title: 'Доллар', name: dollarRate, isChecked: isDollarChecked, changeChecked: changeDollarChecked}, 
        {title: 'Юань', name: yuanRate, isChecked: isYuanChecked, changeChecked: changeYuanChecked}
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