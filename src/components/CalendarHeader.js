import React, {useContext} from 'react'
import logo from '../assets/logo.png'
import GlobalContext from '../context/GlobalContext'
import { connect } from "react-redux";
import { setIndex } from "../store/monthIndex";
import dayjs from 'dayjs';

const CalendarHeader = (props) => {
  //const {monthIndex, setMonthIndex} = useContext(GlobalContext)
  const { setIndex, monthIndex } = props;

  function handlePrevMonth() {
    setIndex(monthIndex - 1);
    //setIndex(3);
    console.log('monthIndex',monthIndex)
  }
  function handleNextMonth() {
    setIndex(monthIndex + 1);
    console.log('monthIndex',monthIndex)
  }
  function handleReset() {
    setIndex(monthIndex === dayjs().month() ? monthIndex + Math.random() : dayjs().month());
    //if monthindex = current month, +  range 0 to less than 1 
  }
  return (
    <header className='px-4 py-2 flex items-center'>
        <img src={logo} alt="calendar" className='mr-2 w-12 h-12'></img>
        <h1 className='mr-10 text-xl text-gray-500 font-bold'>Calendar</h1>
        <button onClick={handleReset} className='border rounded py-2 px-4 mr-5'>
          Today
        </button>
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
        <h2 className='ml-4 text-xl text-gray-500 font-bold'>
          {dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM YYYY")}
        </h2>
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    monthIndex: state.monthIndex,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setIndex: (number) => {
      dispatch(setIndex(number));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CalendarHeader);
