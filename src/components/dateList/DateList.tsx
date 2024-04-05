import React, { FC, useEffect, useMemo, useState } from 'react';
import classes from './DateList.module.scss';
import { useDispatch } from 'react-redux';
import { ChartTypes } from '../../types/chart';
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { getChartValues } from '../../store/action-creator/apiCounter';

const DateList:FC = () => {
    const {isEuroChecked, euroRate} = useTypedSelector(state => state.euro);
    const {isDollarChecked, dollarRate} = useTypedSelector(state => state.dollar);
    const {isYuanChecked, yuanRate} = useTypedSelector(state => state.yuan);
    const {dates} = useTypedSelector(state => state.chart);
    const [startDay, setStartDay] = useState<string>('');
    const [endDay, setEndDay] = useState<string>('');
    const dispatch = useDispatch();
    const monthNames = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    let resultforChart: string[] = [];
    let resultforFetch: string[] = [];
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const currentMonth = currentDate.getMonth() + 1;
    const monthDay = currentDate.getDate();

    useEffect(()=>{
        const weekDay = currentDate.getDay();

        let countMonthDay: number;
        if (weekDay > 1) {
            countMonthDay = monthDay - (weekDay - 1);
        } else if (weekDay === 0) {
            countMonthDay = monthDay - 6;
        } else {
            countMonthDay = monthDay;
        }

        let startDay = countMonthDay;
        setStartDay(`${currentYear}-${currentMonth < 10 ? `0${currentMonth}`: currentMonth}-${startDay < 10 ? `0${startDay}` : startDay}`);
        setEndDay(`${currentYear}-${currentMonth < 10 ? `0${currentMonth}`: currentMonth}-${monthDay < 10 ? `0${monthDay}` : monthDay}`);

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
        
        const datesArr = [];
        datesArr.push(new Date(date));
        resultforChart.push(`${date.getDate()} ${monthNames[date.getMonth()]}`);
        resultforFetch.push(`${date.getFullYear()}-${date.getMonth()+1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`)
        date.setDate(date.getDate() + 1);

        while (date <= endDate) {
            resultforChart.push(`${date.getDate()} ${monthNames[date.getMonth()]}`);
            resultforFetch.push(`${date.getFullYear()}-${date.getMonth() +1 < 10 ? `0${date.getMonth()+1}`: date.getMonth()+1}-${date.getDate() < 10 ? `0${date.getDate()}` : date.getDate()}`);
            datesArr.push(new Date(date));
            date.setDate(date.getDate() + 1);
        }
        dispatch({type: ChartTypes.ADD_LABELS, payload: resultforChart})
        dispatch({type: ChartTypes.ADD_DATES, payload: resultforFetch})
    }, [startDay, endDay])

    useMemo(()=>{
        if (isEuroChecked) {
            dispatch(getChartValues(dates, euroRate))
        }
        if (isDollarChecked) {
            dispatch(getChartValues(dates, dollarRate))
        }
        if (isYuanChecked) {
            dispatch(getChartValues(dates, yuanRate))
        }
    }, [dates])

    return (
        <ul className={classes.chart__date}>
            <li>
                <label className={classes.chart__dateLabel}>
                    Дата с
                    <input min='2024-03-02' max={`${currentYear}-${currentMonth < 10 ? `0${currentMonth}`: currentMonth}-${monthDay < 10 ? `0${monthDay}` : monthDay}`} className={classes.chart__dateInput} type="date" value={startDay} onChange={changeStartDay}/>
                </label>
            </li>
            <li>
                <label className={classes.chart__dateLabel}>
                    Дата по
                    <input min='2024-03-02' max={`${currentYear}-${currentMonth < 10 ? `0${currentMonth}`: currentMonth}-${monthDay < 10 ? `0${monthDay}` : monthDay}`} className={classes.chart__dateInput} type="date" value={endDay} onChange={changeEndDay}/>
                </label>
            </li>
      </ul>
    );
};

export default DateList;