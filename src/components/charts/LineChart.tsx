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
      const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
      const data = {
        labels,
        datasets: [
          {
            label: '«Евро»',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(255, 99, 132)',
            backgroundColor: 'rgba(255, 99, 132, 0.5)',
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
          },
          {
            label: '«Доллар»',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 235)',
            backgroundColor: 'rgba(53, 162, 235, 0.5)',
            usePointStyle: false,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
          },
          {
            label: '«Юань»',
            data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
            borderColor: 'rgb(53, 162, 0)',
            backgroundColor: 'rgba(53, 162, 0, 0.5)',
            usePointStyle: false,
            pointBorderColor: 'transparent',
            pointBackgroundColor: 'transparent',
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

