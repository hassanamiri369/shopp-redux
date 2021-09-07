import { ActionType } from "../ActionType/ActionType";

// show all products
const initState = {
    products : []
}

// upDate with setProduct => actionCreator 

export const setProductReducer = (state = initState , {type , payload}) => {
    switch(type) {
        case ActionType.setProductType :
            return {...state , products : payload}
        default :
            return state
    }
}

// upDate with selectProduct => actionCreator

export const selectProductReducer = (state = {} , {type , payload}) => {
    switch(type){
        case ActionType.selectProductType :
            return {...state , ...payload}   
        case ActionType.removeProductType :
            return {}      // return empty object for clear product page 
        default:
            return state
    }
}