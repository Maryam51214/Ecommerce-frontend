import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { useNavigate, Link } from 'react-router-dom';



// Sample data for carousel images
const carouselData = [
    { img: "/images/watch-1.jpeg" },
    { img: "/images/purses.jpg" },
    { img: "/images/cosmetics.jpg.jpg" }
];

// Sample data for product categories
const categories = [
    { name: 'Electronics', img: '/images/electronics.jpg', link: '/products/electronics' },
    { name: 'Clothes', img: '/images/cloths.jpg', link: '/products/clothes' },
    { name: 'Toys', img: '/images/toys.jpg', link: '/products/toys' },
    { name: 'Glasses', img: '/images/glasses.jpg.jpg', link: '/products/glasses' },
    { name: 'Decorations', img: '/images/decorations.jpg', link: '/products/decorations' },
    { name: 'Perfumes', img: '/images/perfumes.jpg', link: '/products/perfumes' }
];

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const navigate = useNavigate();

    const getAllProducts = async () => {
        try {
            const response = await axios.get("http://localhost:8000/api/products/get-all");
            setProducts(response.data);
        } catch (error) {
            console.error('Error fetching products:', error);
        }
    };

    useEffect(() => {
        getAllProducts();
    }, []);

    const buyerToken = localStorage.getItem("buyerToken");
    console.log(buyerToken);
    useEffect(() => {
        if (!buyerToken) {
            navigate("/products");
        }
    }, [buyerToken, navigate]);

    const addToCart = (product) => {
        const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
        const updatedCart = [...existingCart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        setCart(updatedCart);
    };

    return (
        <>
            <div className="home-container">
                {/* Carousel */}
                <div className="carousel-container">
                    <Carousel
                        showThumbs={false}
                        autoPlay
                        infiniteLoop
                        interval={8000}
                        stopOnHover={false}>
                        {carouselData.map((car, index) => (
                            <div key={index}>
                                <img src={car.img} style={{ width: "1000px", height: "600px", objectFit: "cover" }} alt={`carousel-${index}`} />
                            </div>
                        ))}
                    </Carousel>
                </div>

                {/* Short Description */}
                <div className="short-description">
                    <p>
                        Explore our exclusive range of products including perfumes, watches, and bags. All available at great prices.
                        <br /><br />
                        Find hats, glasses, cosmetics, and more in our store.
                    </p>
                </div>

                {/* Product Categories */}
                <div className="product-category-container">
                    {categories.map((category, index) => (
                        <div className="product-category" key={index}>
                            <Link to={category.link}>
                                <img src={category.img} alt={category.name} className="category-image" />
                                <p>{category.name}</p>
                            </Link>
                        </div>
                    ))}
                </div>

                {/* Product List */}
                <div className="product-list-container">
                    {products.length > 0 ? (
                        products.map((product) => (
                            <div key={product._id} className="product-item">
                                <Link to={`/product/${product._id}`}>
                                    <img src={product.img} alt={product.title} style={{ width: "200px", height: "200px" }} />
                                </Link>
                                <h2>{product.title}</h2>
                                <p>Price: {product.price}</p>
                                <button onClick={() => addToCart(product)}>Add to Cart</button>
                            </div>
                        ))
                    ) : (
                        <p>No products available</p>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;



// import axios from 'axios';
// import React, { useState, useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import './Home.css';
// import { useNavigate } from 'react-router-dom';

// // Sample data for carousel images
// const carouselData = [
//     {
//         img: "/images/watch-1.jpeg"
//     },
//     {
//         img: "/images/purses.jpg"
//     },
//     {
//         img: "/images/cosmetics.jpg.jpg"
//     }
// ];

// // Sample data for product categories
// const categories = [
//     { name: 'Electronics', img: '/images/electronics.jpg', link: '/products/electronics' },
//     { name: 'Clothes', img: '/images/cloths.jpg', link: '/products/clothes' },
//     { name: 'Toys', img: '/images/toys.jpg', link: '/products/toys' },
//     { name: 'Glasses', img: '/images/glasses.jpg.jpg', link: '/products/glasses' },
//     { name: 'Decorations', img: '/images/decorations.jpg', link: '/products/decorations' },
//     { name: 'Perfumes', img: '/images/perfumes.jpg', link: '/products/perfumes' }
// ];

// const Home = () => {
//     const [products, setProducts] = useState([]);
//     const [cart, setCart] = useState([]);

//     const getAllProducts = async () => {
//         try {
//             const response = await axios.get("http://localhost:8000/api/products/get-all");
//             setProducts(response.data);
//         } catch (error) {
//             console.error('Error fetching products:', error);
//         }
//     };

//     useEffect(() => {
//         getAllProducts();
//     }, []);

//     const navigate = useNavigate();

//     const buyerToken = localStorage.getItem("buyerToken");
//     useEffect(() => {
//         if (!buyerToken) {
//             navigate("/");
//         }
//     }, [buyerToken, navigate]);

//     const addToCart = (product) => {
//         const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//         const updatedCart = [...existingCart, product];
//         localStorage.setItem('cart', JSON.stringify(updatedCart));
//         setCart(updatedCart);
//     };

//     return (
//         <>
//             <div className="home-container">
//                 {/* Carousel */}
//                 <div className="carousel-container">
//                     <Carousel
//                         showThumbs={false}
//                         autoPlay
//                         infiniteLoop
//                         interval={8000} // 8 seconds
//                         stopOnHover={false}>
//                         {carouselData.map((car, index) => (
//                             <div key={index}>
//                                 <img src={car.img} style={{ width: "1000px", height: "600px", objectFit: "cover" }} alt={`carousel-${index}`} />
//                             </div>
//                         ))}
//                     </Carousel>
//                 </div>

//                 {/* Short Description */}
//                 <div className="short-description">
//                     <p>This is a short description of the featured products displayed in the carousel above. Explore our exclusive range of perfumes, watches, and bags, all available at great prices.
//                         <br /><br />
//                         This is a short description of the featured products displayed in the carousel above. Explore our exclusive range of hats, glasses, and cosmetics, all available at great prices.
//                     </p>
//                 </div>

//                 {/* Product Categories */}
//                 <div className="product-category-container">
//                     {categories.map((category, index) => (
//                         <div className="product-category" key={index}>
//                             <a href={category.link}>
//                                 <img src={category.img} alt={category.name} className="category-image" />
//                                 <p>{category.name}</p>
//                             </a>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// };

// export default Home;

