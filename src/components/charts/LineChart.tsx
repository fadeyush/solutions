import React, { useEffect } from 'react';
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
import {faker} from '@faker-js/faker';
import { useDispatch } from 'react-redux';
import { fetchApi } from '../../store/action-creator/apiCounter';
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
  const {labels} = useTypedSelector(state => state.chartLabels);
  const {isEuroChecked} = useTypedSelector(state => state.euro);
  const {isDollarChecked} = useTypedSelector(state => state.dollar);
  const {isYuanChecked} = useTypedSelector(state => state.yuan);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchApi())
  }, [])
  
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
            data: [21, 3, 6, 7, 8],
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            showLine: isEuroChecked
          },
          {
            label: '«Доллар»',
            data: [0,7,4,8],
            borderColor: 'rgb(53, 162, 0)',
            backgroundColor: 'rgba(53, 162, 0, 0.5)',
            usePointStyle: false,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
            showLine: isDollarChecked
          },
          {
            label: '«Юань»',
            data: [-9,1,10,14],
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

