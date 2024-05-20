import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliderReducers from "../features/sliderSlice";

const reducer = combineReducers({
    // here we will be adding reducers
    Slider:sliderReducers
  });
export const store = configureStore({reducer})