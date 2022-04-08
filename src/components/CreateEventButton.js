import React, { useContext } from 'react'
import plusImg from '../assets/plus.svg'
import GlobalContext from '../context/GlobalContext'
import { connect } from "react-redux";
import { setShowEventModalReducer } from "../store/showEventModal";

const CreateEventButton = (props) => {

  //const {setShowEventModal} = useContext(GlobalContext)
  const {setShowEventModalReducer } = props; //redux index

  return (
    <button 
    onClick={()=> setShowEventModalReducer(true)}
    className='border p-2 rounded-full flex items-center shadow-md hover:shadow-2xl'
    >
        <img src={plusImg} alt='create_event' className='w-7 h-7'></img>
        <span className='pl-3 pr-7'>Create</span>
    </button>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    setShowEventModalReducer: (bool) => {
      dispatch(setShowEventModalReducer(bool));
    }
  };
}

export default connect(null, mapDispatchToProps)(CreateEventButton);
