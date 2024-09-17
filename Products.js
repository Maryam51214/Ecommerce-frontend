import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// Import JSON data
import productsData from './data/products.json';  // Add this line at the top

const Products = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const buyerToken = localStorage.getItem("buyerToken");

    // Redirect to login if buyerToken is not present
    useEffect(() => {
        if (!buyerToken) {
            navigate("/");
        }
    }, [buyerToken, navigate]);

    // Function to get all products
    const getAllProducts = async () => {
        try {
            // Use the local JSON data
            setProducts(productsData);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    return (
        <div>
            <h1>Products Page</h1>
            {products.length > 0 ? (
                products.map((product, index) => (
                    <div key={index}>
                        <h2>{product.title}</h2>
                        <img 
                            src={require(`../assests/${product.image}`).default} 
                            alt={product.title} 
                            style={{ width: '200px', height: '200px' }} 
                        />
                        <p>{product.description}</p>
                        <p>Price: {product.price}</p>
                    </div>
                ))
            ) : (
                <p>No products available</p>
            )}
        </div>
    );
};

export default Products;




// import React, { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Products = () => {
//     const [products, setProducts] = useState([]);
//     const navigate = useNavigate();
//     const buyerToken = localStorage.getItem("buyerToken");

//     // Redirect to login if buyerToken is not present
//     useEffect(() => {
//         if (!buyerToken) {
//             navigate("/Products");
//         }
//     }, [buyerToken, navigate]);

//     // Function to get all products
//     const getAllProducts = async () => {
//         try {
//             const response = await axios.get("http://localhost:8000/api/products/get-all");
//             setProducts(response.data);
//         } catch (error) {
//             console.error("Error fetching products:", error);
//         }
//     };

//     useEffect(() => {
//         getAllProducts();
//     }, []);

//     return (
//         <div>
//             <h1>Products Page</h1>
//             {/* Render products here */}
//         </div>
//     );
// };

// export default Products;
