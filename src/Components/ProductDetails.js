import React , {useEffect} from 'react'
import { useParams } from 'react-router'
import {Spinner , ProgressBar, Container , Row , Col, Button} from "react-bootstrap"
import { useDispatch , useSelector } from 'react-redux'

import { selectProduct , removeProduct } from '../Redux/ActionCreator/ActionCreator'
const ProductDetails = () => {

    const {productId}= useParams()
    const dispatch = useDispatch()

    const state = useSelector((stata) => stata.selectProductReducer)
    const {title , price , category , image , description} = state
    console.log(state)
    
    const fetchDetailProduct = async () => {
        await fetch(`https://fakestoreapi.com/products/${productId}`)
        .then(response => response.json())
        .then(json => dispatch(selectProduct(json)))
    }


    useEffect(() => {
        if (productId && productId !== "") fetchDetailProduct()
        return () => {
            dispatch(removeProduct())
        }
    }, [productId])



    return (
        <>
            {Object.keys(state).length === 0  ? 
            // (<div><Spinner animation="border" /></div>)
            (<div><ProgressBar variant="success" now={90} /></div>)
             :
            (
               <>
               <Container>
                   <Row>
                        <Col xs={12} md={6}>
                        <img  width="300px" height="400px" src={image} alt=""/>
                        </Col>
                        <Col xs={12} md={6}>
                        <div className="left-div">
                            <p>{category}</p>
                            <p>{description}</p>
                            <p>$ {price}</p>
                            <p>{title}</p>
                            <Button variant="success">Add To Cart</Button>
                        </div>
                       </Col>
                   </Row>
                   
               </Container>
               
               
               </>
            )
                
        }
                
        </>
    )
}

export default ProductDetails
