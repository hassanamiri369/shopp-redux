import {combineReducers} from "redux";

import {setProductReducer , selectProductReducer} from "./MyReducer"


export const reducers = combineReducers({
    setProductReducer : setProductReducer ,
    selectProductReducer : selectProductReducer
})


