import { createStore , applyMiddleware } from "redux";

// thunk middleware

import thunk from "redux-thunk";
// import combine reducers 

import {reducers} from "./AllReducers.js/index";


const store = createStore(reducers , {} , applyMiddleware(thunk))

export default store