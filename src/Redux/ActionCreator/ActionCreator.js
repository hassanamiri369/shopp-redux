import { ActionType } from "../ActionType/ActionType";


export const setProduct = (products) => {
    return (dispatch) => {
        dispatch({type : ActionType.setProductType , payload : products})
    }
}


export const selectProduct = (product) => {
    return (dispatch) => {
        dispatch({type : ActionType.selectProductType , payload : product})
    }
}


export const removeProduct = (product) => {
    return (dispatch) => {
        dispatch({type : ActionType.removeProductType})
    }
} 