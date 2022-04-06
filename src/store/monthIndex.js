import {
    setMonthIndex
  } from "./utils/reducerFunctions";
  import dayjs from 'dayjs'

const SET_MONTHINDEX = "SET_MONTHINDEX";

export const setIndex = (number) => {
    return {
      type: SET_MONTHINDEX,
      number
    };
  };

let initialState = dayjs().month() //current month

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MONTHINDEX:
      return setMonthIndex(
        state,
        action.number,
        );
    default:
      return state;
  }
};

export default reducer;