import React, { useEffect, useState } from 'react';
import classes from './App.module.scss';
import LineChart from './components/charts/LineChart';
import MyCheckbox from './components/UI/checkbox/MyCheckbox';
import { CheckboxProps } from './types/myCheckbox';
import { useTypedSelector } from './hooks/useTypedSelector';
import { useDispatch } from 'react-redux';
import { ChartLabelsTypes } from './types/chartLabels';

function App() {
  const {count} = useTypedSelector(state => state.apiCounter);
  const dispatch = useDispatch();
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
    const currentMonth = currentDate.getMonth();
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря']

    let countMonthDay: number;
    let resultforChart: string[] = [];
    let resultforFetch: string[] = [];
    if (weekDay > 1) {
      countMonthDay = monthDay - (weekDay - 1);
    } else if (weekDay === 0) {
      countMonthDay = monthDay - 6;
    } else {
      countMonthDay = monthDay;
    }
  
    let startDay = countMonthDay;
    let endDay = countMonthDay + 6;
    setStartDay(`${currentYear}-${currentMonth < 10 ? `0${currentMonth}`: currentMonth}-${startDay < 10 ? `0${startDay}` : startDay}`);
    setEndDay(`${currentYear}-${currentMonth < 10 ? `0${currentMonth}`: currentMonth}-${endDay < 10 ? `0${endDay}` : endDay}`);

    for (let i = 0; i < 7; i++) {
      resultforChart.push(`${countMonthDay + i} ${monthNames[currentMonth]}`);
      resultforFetch.push(`${currentYear}-${currentMonth < 10 ? `0${currentMonth}`: currentMonth}-${countMonthDay + i < 10 ? `0${countMonthDay + i}` : countMonthDay + i}`);
      console.log(resultforFetch)
    }
    
    dispatch({type: ChartLabelsTypes.ADD_LABELS, payload: resultforChart})
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

        <div>
          <ul className={classes.chart__currency}>
            {currencyArr.map(currency =>
              <li key={currency.name} className={classes.chart__currencyItem}>
                <MyCheckbox title={currency.title} name={currency.name}/>
              </li>
            )} 
          </ul>

          <ul className={classes.chart__date}>
            <li>
            <label className={classes.chart__dateLabel}>
              Дата с
              <input className={classes.chart__dateInput} type="date" value={startDay} onChange={changeStartDay}/>
            </label>
            </li>
            <li>
              <label className={classes.chart__dateLabel}>
                Дата по
               <input className={classes.chart__dateInput} type="date" value={endDay} onChange={changeEndDay}/>
              </label>
            </li>
          </ul>
        </div>

        <LineChart/>

      </div>

      <p className={classes.chart__apiNumber}>Число запросов API: {count}</p>

    </div>
  );
}

export default App;
