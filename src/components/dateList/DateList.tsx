import React, { FC, useEffect, useMemo, useState } from 'react';
import classes from './DateList.module.scss';
import { useDispatch } from 'react-redux';
import { ChartTypes } from '../../types/chart';
const DateList:FC = () => {
    const [startDay, setStartDay] = useState<string>('');
    const [endDay, setEndDay] = useState<string>('');
    const dispatch = useDispatch();
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let resultforChart: string[] = [];
    let resultforFetch: string[] = [];
    
    useEffect(()=>{
        const currentDate = new Date();
        const currentYear = currentDate.getFullYear();
        const monthDay = currentDate.getDate();
        const weekDay = currentDate.getDay();
        const currentMonth = currentDate.getMonth() + 1;

        let countMonthDay: number;
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
        }
        dispatch({type: ChartTypes.ADD_LABELS, payload: resultforChart})
        dispatch({type: ChartTypes.ADD_DATES, payload: resultforFetch})
    }, []);
    
    const changeStartDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStartDay(e.target.value);
    }
    const changeEndDay = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEndDay(e.target.value);
    }

    useMemo(()=>{
        const startDate = new Date(startDay);
        const endDate = new Date(endDay);
        const date = new Date(startDate.getTime());
        
        const dates = [];
        dates.push(new Date(date));
        resultforChart.push(`${date.getDate()} ${monthNames[date.getMonth()]}`);
        resultforFetch.push(`${date.getFullYear()}-${date.getMonth()+1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`)
        date.setDate(date.getDate() + 1);

        while (date <= endDate) {
            resultforChart.push(`${date.getDate()} ${monthNames[date.getMonth()]}`);
            resultforFetch.push(`${date.getFullYear()}-${date.getMonth() +1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`);
            dates.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        dispatch({type: ChartTypes.ADD_LABELS, payload: resultforChart})
        dispatch({type: ChartTypes.ADD_DATES, payload: resultforFetch})
    }, [startDay, endDay])

    return (
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
    );
};

export default DateList;