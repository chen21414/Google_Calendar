import React, {useState, useContext, useEffect} from 'react';
import './App.css';
import { getMonth } from "./util";
import CalendarHeader from './components/CalendarHeader';
import Month from './components/Month';
import Sidebar from './components/Sidebar';
import GlobalContext from './context/GlobalContext';
import { Provider } from "react-redux";
import store from "./store";
import Home from './Home';

function App() {
  //console.table(getMonth())
  const [currentMonth, setCurrentMonth] = useState(getMonth())
  const {monthIndedx} = useContext(GlobalContext)
  console.log('current month', monthIndedx)

  useEffect(()=>{
    setCurrentMonth(getMonth(monthIndedx))
  }, [monthIndedx])

  return (
    <Provider store={store}>
    <Home/>
    </Provider>
  );
}

export default App;
