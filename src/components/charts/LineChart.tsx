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
import {faker} from '@faker-js/faker';
import axios from 'axios';

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
      const date = '2024-03-28';
      const currencie = 'eur';
      axios.get(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@${date}/v1/currencies/${currencie}.json`)
      .then((response) => {
        console.log(response.data)
      })
      
    return (
        <div className={classes.lineChart__wrapper}>
            <Line options={options} data={data}/>
        </div>
    );
};

export default LineChart;

