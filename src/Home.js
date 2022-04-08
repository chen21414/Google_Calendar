import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import { getMonth } from "./util";
import { connect } from "react-redux";
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import GlobalContext from './context/GlobalContext';
import EventModal from './components/EventModal';
import { setShowEventModalReducer } from "../src/store/showEventModal";

function Home(props) {
  //console.table(getMonth())
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  //const {monthIndedx, showEventModal} = useContext(GlobalContext) //context index
  const { monthIndex, showEventModal, setShowEventModalReducer } = props; //redux index
  console.log('current month', monthIndex)

  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <React.Fragment>
      {showEventModal && <EventModal/>}
      <div className="h-screen flex flex-col">   
        <CalendarHeader/>       
        <div className="flex flex-1">
        <Sidebar/>
        <Month month={currentMonth}/>
        </div>
      </div>
    </React.Fragment>
  );
}
const mapStateToProps = (state) => {
    return {
    monthIndex: state.monthIndex,
    showEventModal: state.showEventModal,
    };
  };

const mapDispatchToProps = (dispatch) => {
    return {
      setShowEventModalReducer: (bool) => {
        dispatch(setShowEventModalReducer(bool));
      }
    };
}
  

export default connect(mapStateToProps, mapDispatchToProps)(Home);
