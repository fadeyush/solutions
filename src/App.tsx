import React from 'react';
import classes from './App.module.scss';
import LineChart from './components/charts/LineChart';

function App() {
  const api: number = 0; 
  return (
    <div className={classes.App}>
      <div className={classes.chart__wrapper}>
        <div className={classes.chart__}>

        </div>
        <LineChart/>
      </div>
      <p className={classes.chart__apiNumber}>Число запросов API: {api}</p>
    </div>
  );
}

export default App;
