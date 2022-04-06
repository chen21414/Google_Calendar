import { createStore, applyMiddleware, combineReducers } from "redux";
import loggerMiddleware from "redux-logger";
import thunkMiddleware from "redux-thunk";

import monthIndex from "./monthIndex"

const appReducer = combineReducers({
    monthIndex
  });

  const rootReducer = (state, action) => { //rootReducer = combineReducers
    return appReducer(state, action);
  };

  export default createStore(rootReducer, applyMiddleware(thunkMiddleware, loggerMiddleware));