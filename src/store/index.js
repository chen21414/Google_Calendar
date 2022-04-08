import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import monthIndex from "./monthIndex"
import smallCalendarMonth from "./smallCalendarMonth"
import daySelected from "./daySelected"
import showEventModal from "./showEventModal"


const appReducer = combineReducers({
    monthIndex,
    smallCalendarMonth,
    daySelected,
    showEventModal
  });

  const rootReducer = (state, action) => { //rootReducer = combineReducers
    return appReducer(state, action);
  };

  export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));