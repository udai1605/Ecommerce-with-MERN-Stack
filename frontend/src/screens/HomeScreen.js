import React , {useState,useEffect} from 'react'
import axios from 'axios' 
import Product from '../components/Product'
import {Row, Col} from 'react-bootstrap'
const HomeScreen = () => {
    const [products, setProducts]=useState([])

    useEffect(() =>{          //use effect is used to fire up as soon as the component is loaded
        const fetchProducts = async () => {
            const {data} = await axios.get('/api/products');            //axios is used to send http request to backend

            setProducts(data);
        }
        fetchProducts();
    },[])
    return (
        <div>
            
            <Row>
                {products.map(product=>(
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Product product={product}/>
                    </Col>
                ))}
            </Row>
        </div>
    )
}

export default HomeScreen
