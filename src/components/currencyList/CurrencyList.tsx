import React, { FC } from 'react';
import { CheckboxProps } from '../../types/myCheckbox';
import classes from './CurrencyList.module.scss';
import MyCheckbox from '../UI/checkbox/MyCheckbox';

const CurrencyList: FC = () => {
    
  const currencyArr:CheckboxProps[] = [
    {title: 'Евро', name: 'eur'}, 
    {title: 'Доллар', name: 'usd'}, 
    {title: 'Юань', name: 'cny'}
  ];
    return (
        
        <ul className={classes.chart__currency}>
        {currencyArr.map(currency =>
          <li key={currency.name} className={classes.chart__currencyItem}>
            <MyCheckbox title={currency.title} name={currency.name}/>
          </li>
        )} 
      </ul>
    );
};

export default CurrencyList;