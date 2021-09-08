import React , {useEffect} from 'react'
import {useDispatch } from "react-redux"


//action creator => setProduct

import {setProduct} from "../Redux/ActionCreator/ActionCreator"
import ProductComponent from './ProductComponent'
const ProductList = () => {

    const dispatch = useDispatch()

   

    const fetchProductData = async () => {
        await fetch("https://fakestoreapi.com/products")
        .then(response => response.json())
        .then(json => dispatch(setProduct(json)))
        
    }

    useEffect(() => {
        fetchProductData()
    } , [])    



    return (
        <div>
            <ProductComponent/>
            
        </div>
    )
}

export default ProductList
