import dayjs from 'dayjs'
import React, { useContext, useEffect, useState } from 'react'
import GlobalContext from '../context/GlobalContext'
import { getMonth } from '../util'
import { connect } from "react-redux";
import { setIndex } from "../store/monthIndex";
import {setsmallCalendarMonthReducer} from "../store/smallCalendarMonth"
import {setDaySelectedReducer } from "../store/daySelected";

const SmallCalendar = (props) => {
    const {monthIndex, setsmallCalendarMonthReducer, setIndex, setDaySelectedReducer, daySelected } = props;
    const [currentMonthIdx, setCurrentMonthIdx] = useState(dayjs().month())
    const [currentMonth, setCurrentMonth] = useState(getMonth)

    useEffect(()=>{
        setCurrentMonth(getMonth(currentMonthIdx))
    },[currentMonthIdx])

    //context example
    // const {monthIndex, setsmallCalendarMonth, setDaySelected, daySelected} = useContext(GlobalContext)

    useEffect(()=>{
        setCurrentMonthIdx(monthIndex);
    }, [monthIndex])

    function handlePrevMonth() {
        setCurrentMonthIdx(currentMonthIdx - 1)
    }

    function handleNextMonth() {
        setCurrentMonthIdx(currentMonthIdx + 1)
    }

    function getDayClass(day) {
        const format = "DD-MM-YY"
        const nowDay = dayjs().format(format)
        const currDay = day.format(format)
        const slcDay = daySelected && daySelected.format(format)
        if(nowDay === currDay) {
            return 'bg-blue-500 rounded-full text-white'
        } 
        else if (currDay === slcDay){
            return 'bg-blue-100 rounded-full text-blue-600 font-bold'
        }
        else {
            return ""
        }
    }

  return (
    <div className='mt-9'>
        <header className='flex justify-between'>
            <p className='text-gray-500 font-bold'>
                {dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}
            </p>

            <div>
            <button onClick={handlePrevMonth}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                    chevron_left
                </span>
            </button>
            <button onClick={handleNextMonth}>
                <span className='material-icons-outlined cursor-pointer text-gray-600 mx-2'>
                    chevron_right
                </span>
            </button>
            </div>
            
        </header>
        <div className='grid grid-cols-7 grid-rows-6'>
            {/* loop into first row of the month */}
            {currentMonth[0].map((day, i) => (
                <span key={i} className='text-sm py-1 text-center'>
                    {/* first character of the week */}
                    {day.format('dd').charAt(0)}
                </span>
            ))}
            {currentMonth.map((row, i) => (
                <React.Fragment key={i}>
                    {row.map((day, idx) => (
                        <button key={idx} 
                        onClick={()=>{
                            setIndex(currentMonthIdx); 
                            setDaySelectedReducer(day);
                        }}
                        className={`py-1 w-full ${getDayClass(day)}`}
                        >
                            <span className='text-sm'>{day.format('D')}</span>
                        </button>
                    ))}
                </React.Fragment>
            ))}
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
    return {
      monthIndex: state.monthIndex,
      daySelected: state.daySelected
    };
  };

  const mapDispatchToProps = (dispatch) => {
    return {
        setsmallCalendarMonthReducer: (number) => {
        dispatch(setsmallCalendarMonthReducer(number));
        },
        setIndex: (number) => {
        dispatch(setIndex(number));
        },
        setDaySelectedReducer: (day) => {
        dispatch(setDaySelectedReducer(day));
        }
    };
  }

export default connect(mapStateToProps, mapDispatchToProps)(SmallCalendar);
