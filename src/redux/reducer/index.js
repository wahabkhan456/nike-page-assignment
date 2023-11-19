import { combineReducers } from "redux";
import setColorData from "./data/setColorData";
import getCounter from "./data/getCounter";

const rootReducer = combineReducers({
  getImages: setColorData,
  getCounter: getCounter,
});

export default rootReducer;
