import {
    setsmallCalendarMonth
  } from "./utils/reducerFunctions";
  import dayjs from 'dayjs'

const SET_SMALLCALENDARMONTH = "SET_SMALLCALENDARMONTH";

export const setsmallCalendarMonthReducer = (number) => {
    return {
      type: SET_SMALLCALENDARMONTH,
      number
    };
  };


const reducer = (state = null, action) => {
  switch (action.type) {
    case SET_SMALLCALENDARMONTH:
      return setsmallCalendarMonth(
        state,
        action.number,
        );
    default:
      return state;
  }
};

export default reducer;