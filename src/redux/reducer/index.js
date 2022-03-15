import { combineReducers } from "redux";
import { dataReducer } from "./dataReducer";
//combine reducer to add multiple reducer for different states
export const rootReducer  =  combineReducers({
    dataState: dataReducer
})