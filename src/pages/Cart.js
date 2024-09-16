import React, { useEffect, useState } from 'react'

const Cart = () => {
    const [cart, setCart] = useState([]);

    useEffect(() => {
        const savedCart = JSON.parse(localStorage.getItem('cart')) || [];
        setCart(savedCart);
    }, [])
    return (
        <div className="container">
            <div className="row">
                {
                    cart.length > 0 ? (
                        cart.map((item, index) => (
                            <>
                                <div key={index} className="cart-item col-lg-8 col-md-8 col-sm-12">
                                    <img src={item.img} alt={item.name} />
                                    <h3>{item.name}</h3>
                                    <p>{item.description}</p>
                                    <p>Price: ${item.price}</p>
                                </div>
                                
                            </>
                        ))
                    ) : (<>
                        <h1>Cart is empty</h1>
                    </>)
                }
            </div>
        </div>
    )
}

export default Cart