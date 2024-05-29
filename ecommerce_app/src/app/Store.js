import { combineReducers, configureStore } from "@reduxjs/toolkit";
import sliderReducers from "../features/sliderSlice";
import productRducer from "../features/productSlice";

const reducer = combineReducers({
    // here we will be adding reducers
    Slider:sliderReducers,
    products:productRducer
  });
export const store = configureStore({reducer})