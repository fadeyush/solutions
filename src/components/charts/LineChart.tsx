import React from 'react';
import classes from './LineChart.module.scss';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';

import { Line } from 'react-chartjs-2';
import { useTypedSelector } from '../../hooks/useTypedSelector';
ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const LineChart = () => {
  const {labels} = useTypedSelector(state => state.chart);
  const {isEuroChecked, rubRatesEuro} = useTypedSelector(state => state.euro);
  const {isDollarChecked, rubRatesDollar} = useTypedSelector(state => state.dollar);
  const {isYuanChecked, rubRatesYuan} = useTypedSelector(state => state.yuan);

    const options = {
        responsive: true,
        plugins: {
          legend: {
            position: 'top' as const,
          },
          title: {
            display: true,
            text: 'График курса валют по отношению к рублю',
          },
        }
      };
      const data = {
        labels,
        datasets: [
          {
            label: '«Евро»',
            data: rubRatesEuro,
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            showLine: isEuroChecked
          },
          {
            label: '«Доллар»',
            data: rubRatesDollar,
            borderColor: 'rgb(53, 162, 0)',
            backgroundColor: 'rgba(53, 162, 0, 0.5)',
            usePointStyle: false,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            showLine: isDollarChecked
          },
          {
            label: '«Юань»',
            data: rubRatesYuan,
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            usePointStyle: false,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            showLine: isYuanChecked
          }
        ],
      };
      
    return (
        <div className={classes.lineChart__wrapper}>
            <Line options={options} data={data}/>
        </div>
    );
};

export default LineChart;

