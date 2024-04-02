import React from 'react';
import classes from './App.module.scss';
import LineChart from './components/charts/LineChart';
import MyCheckbox from './components/UI/checkbox/MyCheckbox';
import { CheckboxProps } from './types/myCheckbox';

function App() {
  const apiCount:number = 0;
  const rubKey:string = 'rub';
  const currencyArr:CheckboxProps[] = [
    {title: 'Евро', name: 'eur'}, 
    {title: 'Доллар', name: 'usd'}, 
    {title: 'Юань', name: 'cny'}
  ];

  return (
    <div className={classes.App}>

      <div className={classes.chart}>

        <div className={classes.chart__wrapper}>

          <ul className={classes.chart__currency}>
            {currencyArr.map(currency =>
              <li className={classes.chart__currencyItem}>
                <MyCheckbox key={currency.name} title={currency.title} name={currency.name}/>
              </li>
            )} 
          </ul>

          <ul className={classes.chart__date}></ul>
        </div>
        <LineChart/>

      </div>

      <p className={classes.chart__apiNumber}>Число запросов API: {apiCount}</p>

    </div>
  );
}

export default App;
