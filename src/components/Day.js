import dayjs from 'dayjs'
import React, { useContext } from 'react'
import GlobalContext from '../context/GlobalContext'
import { connect } from "react-redux";
import { setShowEventModalReducer} from "../store/showEventModal";
import {setDaySelectedReducer } from "../store/daySelected";

const Day = (props) => {

  const {setShowEventModalReducer,setDaySelectedReducer, daySelected, day, rowIdx } = props;

  function getCurrentDayClass(){
    return day.format("DD-MM-YY") === dayjs().format("DD-MM-YY") 
    ? 'bg-blue-600 text-white rounded-full w-7'
    :
    ''
    //dayjs() = current
    //if this date is current date
  }
  
  //const {setDaySelected, setShowEventModal} = useContext(GlobalContext)
  
  return (
    <div className="border border-gray-200 flex flex-col">
        <header className="flex flex-col items-center">
        {rowIdx === 0 && (
        <p className="text-sm mt-1">{day.format('ddd').toUpperCase()}</p>
        )}
        <p className={`text-sm p-1 my-1 text-center ${getCurrentDayClass()}`}>{day.format('DD')}</p>
        </header>
        <div className='flex-1 cursor-pointer' onClick={()=>{
             setDaySelectedReducer(day);
             setShowEventModalReducer(true);
        }}>
        {""}
        </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    daySelected: state.daySelected
  };
};


const mapDispatchToProps = (dispatch) => {
  return {
    setShowEventModalReducer: (bool) => {
      dispatch(setShowEventModalReducer(bool));
    },
    setDaySelectedReducer: (day) => {
      dispatch(setDaySelectedReducer(day));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Day);