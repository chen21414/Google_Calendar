import {
    setDaySelected
  } from "./utils/reducerFunctions";
  import dayjs from 'dayjs'

const SET_DAYSELECTED = "SET_DAYSELECTED";

export const setDaySelectedReducer = (number) => {
    return {
      type: SET_DAYSELECTED,
      number
    };
  };

const reducer = (state = null, action) => {
  switch (action.type) {
    case SET_DAYSELECTED:
      return setDaySelected(
        state,
        action.number,
        );
    default:
      return state;
  }
};

export default reducer;