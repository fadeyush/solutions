import React from 'react';
import classes from './App.module.scss';
import LineChart from './components/charts/LineChart';
import { useTypedSelector } from './hooks/useTypedSelector';
import CurrencyList from './components/currencyList/CurrencyList';
import DateList from './components/dateList/DateList';

function App() {
  const {count} = useTypedSelector(state => state.apiCounter);
  const rubKey:string = 'rub';
  
  return (
    <div className={classes.App}>
      <div className={classes.chart}>
        <div>
          <CurrencyList/>
          <DateList/>
        </div>
        <LineChart/>
      </div>
      <p className={classes.chart__apiNumber}>Число запросов API: {count}</p>
    </div>
  );
}

export default App;
