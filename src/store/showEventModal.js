import {
    setShowEventModal
  } from "./utils/reducerFunctions";

const SET_SHOWEVENTMODAL = "SET_SHOWEVENTMODAL";

export const setShowEventModalReducer = (bool) => {
    return {
      type: SET_SHOWEVENTMODAL,
      bool
    };
  };


const reducer = (state = false, action) => {
  switch (action.type) {
    case SET_SHOWEVENTMODAL:
      return setShowEventModal(
        state,
        action.bool,
        );
    default:
      return state;
  }
};

export default reducer;