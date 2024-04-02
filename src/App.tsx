import React, { useEffect, useState } from 'react';
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
  const [startDay, setStartDay] = useState<string>('');
  const [endDay, setEndDay] = useState<string>('');

  useEffect(()=>{
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const monthDay = currentDate.getDate();
    const weekDay = currentDate.getDay();

    let result = {startDate: '', endDate: ''};
    let countMonthDay;
    if (weekDay > 1) {
      countMonthDay = monthDay - (weekDay - 1);
    } else if (weekDay === 0) {
      countMonthDay = monthDay - 6;
    } else {
      countMonthDay = monthDay;
    }
  
    let startDay = countMonthDay;
    let endDay = countMonthDay + 6;
    setStartDay(`${currentYear}-${currentDate.getMonth() < 10 ? `0${currentDate.getMonth()}`: currentDate.getMonth()}-${startDay < 10 ? `0${startDay}` : startDay}`);
    setEndDay(`${currentYear}-${currentDate.getMonth() < 10 ? `0${currentDate.getMonth()}`: currentDate.getMonth()}-${endDay < 10 ? `0${endDay}` : endDay}`);
  }, []);

  const changeStartDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDay(e.target.value);
  }
  const changeEndDay = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDay(e.target.value);
  }

  return (
    <div className={classes.App}>

      <div className={classes.chart}>

        <div className={classes.chart__wrapper}>

          <ul className={classes.chart__currency}>
            {currencyArr.map(currency =>
              <li key={currency.name} className={classes.chart__currencyItem}>
                <MyCheckbox title={currency.title} name={currency.name}/>
              </li>
            )} 
          </ul>

          <ul className={classes.chart__date}>
            <li>
              <input type="date" value={startDay} onChange={changeStartDay}/>
            </li>
            <li>
              <input type="date" value={endDay} onChange={changeEndDay}/>
            </li>
          </ul>
        </div>
        <LineChart/>

      </div>

      <p className={classes.chart__apiNumber}>Число запросов API: {apiCount}</p>

    </div>
  );
}

export default App;
