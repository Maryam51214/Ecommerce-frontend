
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import './Home.css';
import { useNavigate } from 'react-router-dom';

// Sample data for carousel images
const carouselData = [
    {
        img: "/images/watch-1.jpeg"
    },
    {
        img: "/images/purses.jpg"
    },
    {
        img: "/images/cosmetics.jpg.jpg"
    }
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

    const navigate = useNavigate();

    const buyerToken = localStorage.getItem("buyerToken");
    useEffect(() => {
        if (!buyerToken) {
            navigate("/");
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
                        interval={8000} // 8 seconds
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
                    <p>This is a short description of the featured products displayed in the carousel above. Explore our exclusive range of perfumes, watches, and bags, all available at great prices.
                        <br /><br />
                        This is a short description of the featured products displayed in the carousel above. Explore our exclusive range of hats, glasses, and cosmetics, all available at great prices.
                    </p>
                </div>

                {/* Product Categories */}
                <div className="product-category-container">
                    {categories.map((category, index) => (
                        <div className="product-category" key={index}>
                            <a href={category.link}>
                                <img src={category.img} alt={category.name} className="category-image" />
                                <p>{category.name}</p>
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Home;

// import axios from 'axios';
// import React, { useState,useEffect } from 'react';
// import { Carousel } from 'react-responsive-carousel';
// import './Home.css';
// import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';


// // const Home = () => {
//     // const [showPopup, setShowPopup] = useState(true); // State to show/hide the popup

//     // const closePopup = () => {
//     //     setShowPopup(false);
//     // };
//     //  // Reopen the popup every 3 minutes (180000 ms)
//     //  useEffect(() => {
//     //     const interval = setInterval(() => {
//     //         setShowPopup(true); // Show the popup again
//     //     }, 10000); // 10000 milliseconds = 3 seconds minutes

//     //     return () => clearInterval(interval); // Clear the interval when the component is unmounted
//     // }, []);
    
    

//     const data=
        
//     [
        
//         {
//             img: "/images/watch-1.jpeg"
//         },
//         {
//             img: "/images/purses.jpg"
//         },
//         {
//             img: "/images/cosmetics.jpg.jpg"
//         }
//     ];
//     const Home = () => {

//         const [products, setProducts] = useState([]);
//         const [cart, setCart] = useState([])
    
//         const getAllProducts = async () => {
//             try {
//                 const response = await axios.get("http://localhost:8000/api/products/get-all");
//                 setProducts(response.data)
//             } catch (error) {
    
//             }
//         }
    
//         useEffect(() => {
//             getAllProducts()
//         }, [])
    
//         const navigate = useNavigate()
    
//         const buyerToken = localStorage.getItem("buyerToken")
//         useEffect(() => {
//             if (!buyerToken) {
//                 navigate("/")
//             }
//         })
    
//         const addToCart = (product) => {
//             const existingCart = JSON.parse(localStorage.getItem("cart")) || [];
//             const updatedCart = [...existingCart, product];
//             localStorage.setItem('cart', JSON.stringify(updatedCart));
//             setCart(updatedCart)
//         }

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
//                         {
//                             data.map((car, index) => (
//                                 <div key={index}>
//                                     <img src={car.img} style={{ width: "1000px", height: "600px", objectFit: "cover" }} alt={`carousel-${index}`} />
//                                 </div>
//                             ))
//                         }
//                     </Carousel>
//                 </div>

//                 {/* Short Description */}
//                 <div className="short-description">
//                     <p>This is a short description of the featured products displayed in the carousel above. Explore our exclusive range of perfumes, watches, and bags, all available at great prices.
//                         <br /><br />
//                         This is a short description of the featured products displayed in the carousel above. Explore our exclusive range of hats, glasses, and cosmetics, all available at great prices.
//                     </p>
//                 </div>
//                 {/* Product Category Links */}
// <div className="product-category-container">
//     <div className="product-category">
//         <a href="/products/electronics">
//             <img src="/images/electronics.jpg" alt="Electronics" className="category-image" />
//             <p>Electronics</p>
//         </a>
//     </div>
//     <div className="product-category">
//         <a href="/products/clothes">
//             <img src="/images/cloths.jpg" alt="Cloths" className="category-image" />
//             <p>Clothes</p>
//         </a>
//     </div>
//     <div className="product-category">
//         <a href="/products/toys">
//             <img src="/images/toys.jpg" alt="Toys" className="category-image" />
//             <p>Toys</p>
//         </a>
//     </div>
   
//     <div className="product-category">
//         <a href="/products/glasses">
//             <img src="/images/glasses.jpg.jpg" alt="Glasses" className="category-image" />
//             <p>Glasses</p>
//         </a>
//     </div>
//     <div className="product-category">
//         <a href="/products/glasses">
//         <img src="/images/glasses.jpg.jpg" alt="Glasses" className="category-image" />
//         <p>Glasses</p>
//         </a>
//     </div>
    
//     {/* Product Category Links */}
// <div className="product-category-container">
//     <div className="product-category">
//         <a href="/products/electronics">
//             <img src="/images/electronics.jpg" alt="Electronics" className="category-image" />
//             <p>Electronics</p>
//         </a>
//     </div>
//     <div className="product-category">
//         <a href="/products/clothes">
//             <img src="/images/cloths.jpg" alt="Clothes" className="category-image" />
//             <p>Clothes</p>
//         </a>
//     </div>
//     <div className="product-category">
//         <a href="/products/toys">
//             <img src="/images/toys.jpg" alt="Toys" className="category-image" />
//             <p>Toys</p>
//         </a>
//     </div>
//     <div className="product-category">
//         <a href="/products/decorations">
//             <img src="/images/decorations.jpg" alt="Decorations" className="category-image" />
//             <p>Decorations</p>
//         </a>
//     </div>
//     <div className="product-category">
//         <a href="/products/decorations">
//             <img src="/images/decorations.jpg" alt="Decorations" className="category-image" />
//             <p>Decorations</p>
//         </a>
//     </div>
//     <div className='perfumes'>
//     <div className="product-category">
//         <a href="/products/perfumes">
//             <img src="/images/perfumes.jpg" alt="Perfumes" className="category-image" />
//             <p>Perfumes</p>
//         </a>
//     </div>
    
//     <div className="product-category">
//         <a href="/products/perfumes">
//             <img src="/images/perfumes.jpg" alt="Perfumes" className="category-image" />
//             <p>Perfumes</p>
//         </a>
//     </div>
//     </div>
    
// </div>

// </div>

//             </div>
//         </>
//     );
// };


// export default Home