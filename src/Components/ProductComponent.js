import React from 'react'
import "./ProductComponent.css";

import { useSelector } from 'react-redux';


const ProductComponent = () => {

    const state = useSelector((stata) => stata.setProductReducer.products)
    
    return (
        <div>
            {
                state.map((item) => (
                    <p>{item.title}</p>
                ))
            }
        </div>
    )
}

export default ProductComponent
