import { combineReducers } from "redux";
import imageReducer from "./ImageReducer";

export default combineReducers({
  image: imageReducer,
});
