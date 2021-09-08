import React from 'react'
import "./ProductComponent.css";

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

// add style 
import { Button, Container, Row, Col, Card } from 'react-bootstrap';

const ProductComponent = () => {

    const state = useSelector((stata) => stata.setProductReducer.products)

    return (
        <Container fluid className="container-div" >
            <Row className="row-div"  >
            {
                state.map((item) => (
                    
                        <Col xs={12} sm={6} md={4} lg={3} className="col-div" >
                            <Card className="card-div" >
                                <Card.Img variant="top" src={item.image} className="img-card" />
                                <Card.Body className="card-body" >
                                    <Card.Title>{item.price}</Card.Title>
                                    <Card.Text>
                                        {item.title}
                                    </Card.Text>
                                    <Card.Text className="card-text" >
                                    <Button variant="success" color="primary">
                                        <Link style={{color: "white" , textDecoration : "none"}} to = {`/product/${item.id}`} >View</Link>
                                    </Button>
                                    <Button variant="secondary">Add To Cart</Button>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>

                    
                ))
            }
            </Row>
        </Container>
    )
}

export default ProductComponent
