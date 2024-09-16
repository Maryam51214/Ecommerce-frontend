

import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductDetail = () => {

    const [product, setProduct] = useState()
    const { id } = useParams();

    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products/product-detail/${id}`);
                setProduct(response.data)
            } catch (error) {
                console.log(error);

            }


        }

        getProductDetail()
    },[])

    return (
        <div className="container">
            <div className="row">
                <img src={product?.img} alt="" />
                <h4>{product?.title}</h4>
            </div>
        </div>
    )
}

export default ProductDetail