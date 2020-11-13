import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { listProducts } from '../actions/productActions'
import Product from '../components/Product'
import Message from '../components/Message'
import Loader from '../components/Loader'
import { Row, Col } from 'react-bootstrap'
const HomeScreen = () => {
    const dispatch = useDispatch()

    const productList = useSelector((state) => state.productList)
    const { loading, error, products } = productList
  
    useEffect(() => {
        dispatch(listProducts())
    }, [dispatch])

    return (
        <div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant='danger'>{error}</Message>
            ) : (
                        <Row>
                            {products.map((product) => (
                                <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                                    <Product product={product} />
                                </Col>
                            ))}
                        </Row>
                    )}

        </div>
    )
}

export default HomeScreen