import {combineReducer} from "redux";

import {setProductReducer , selectProductReducer} from "./MyReducer"


const reducers = combineReducer({
    setProductReducer : setProductReducer ,
    selectProductReducer : selectProductReducer
})


export default reducers