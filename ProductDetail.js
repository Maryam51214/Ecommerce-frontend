import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ProductDetail = () => {
    const [product, setProduct] = useState();
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const getProductDetail = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/products/product-detail/${id}`);
                setProduct(response.data);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };
        getProductDetail();
    }, [id]);

    const addToCart = () => {
        const cartItems = JSON.parse(localStorage.getItem("cartItems")) || [];
        cartItems.push(product);
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        navigate("/cart");
    };

    return (
        <div className="container">
            {product ? (
                <div className="row">
                    <img src={product.img} alt={product.title} style={{ width: "400px", height: "400px" }} />
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                    <p>Price: {product.price}</p>
                    <button onClick={addToCart}>Add to Cart</button>
                </div>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default ProductDetail;


// import axios from 'axios';
// import React, { useEffect, useState } from 'react'
// import { useParams } from 'react-router-dom'

// const ProductDetail = () => {

//     const [product, setProduct] = useState()
//     const { id } = useParams();

//     useEffect(() => {
//         const getProductDetail = async () => {
//             try {
//                 const response = await axios.get(`http://localhost:8000/api/products/product-detail/${id}`);
//                 setProduct(response.data)
//             } catch (error) {
//                 console.log(error);

//             }


//         }

//         getProductDetail()
//     },[])

//     return (
//         <div className="container">
//             <div className="row">
//                 <img src={product?.img} alt="" />
//                 <h4>{product?.title}</h4>
//             </div>
//         </div>
//     )
// }

// export default ProductDetail