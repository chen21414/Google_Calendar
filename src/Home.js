import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import { getMonth } from "./util";
import { connect } from "react-redux";
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import GlobalContext from './context/GlobalContext';

function Home(props) {
  //console.table(getMonth())
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  //const {monthIndedx} = useContext(GlobalContext) //context index
  const { monthIndex } = props; //redux index
  console.log('current month', monthIndex)

  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndex))
  }, [monthIndex])

  return (
    <React.Fragment>
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
    };
  };

export default connect(mapStateToProps, null)(Home);
