import React from "react";
import { NavLink, Link } from "react-router-dom";
// import { GiShoppingBag } from "react-icons/gi";

const Navbar = () => {
  const buyerToken = localStorage.getItem("buyerToken");
  const sellerToken = localStorage.getItem("sellerToken");

  const logout = () => {
    localStorage.removeItem("buyerToken");
    localStorage.removeItem("sellerToken");
    window.location.href = "/login"; // Adjust the route as needed
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar">
        <div className="container-fluid bg-color">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <Link to="/" className="navbar-brand">
             {/* <GiShoppingBag /> */}

              🛒 Ecommerce App
            </Link>

            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/products" className="nav-link">
                  Products
                </NavLink>
              </li>
              
              {/* Buyer Section Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownBuyer"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Buyer Section
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownBuyer">
                  <li>
                    <Link to="/register" className="dropdown-item">
                      Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/login" className="dropdown-item">
                      Login
                    </Link>
                  </li>
                </ul>
              </li>
              {/* Seller Section Dropdown */}
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  id="navbarDropdownSeller"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Seller Section
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdownSeller">
                  <li>
                    <Link to="/seller-register" className="dropdown-item">
                      Seller Register
                    </Link>
                  </li>
                  <li>
                    <Link to="/seller-login" className="dropdown-item">
                      Seller Login
                    </Link>
                  </li>
                  <li>
                    <Link to="/seller-dashboard" className="dropdown-item">
                      Seller Dashboard
                    </Link>
                  </li>
                </ul>
              </li>
            </ul>
            <div className="nav-item">
                <NavLink to="/cart" className="nav-link cartlist">
                  Cart (0)
                </NavLink>
              </div>

            {/* Login and Logout buttons */}
            <form className="d-flex ms-3">
              {buyerToken || sellerToken ? (
                <button
                  className="btn"
                  style={{ background: "#446f71", color: "black", width: "120px" }}
                  onClick={(e) => {
                    e.preventDefault(); // Prevent form from submitting
                    logout();
                  }}
                >
                  Logout
                </button>
              ) : (
                <>
                </>
                                  
              )}
            </form>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;


// import React from "react";
// import { NavLink, Link } from "react-router-dom";
// import { GiShoppingBag } from "react-icons/gi";

// const Navbar = () => {
//   return (
//     <>
// <nav className="navbar navbar-expand-lg navbar">
//         <div className="container-fluid bg-color">
//           <button
//             className="navbar-toggler"
//             type="button"
//             data-bs-toggle="collapse"
//             data-bs-target="#navbarTogglerDemo01"
//             aria-controls="navbarTogglerDemo01"
//             aria-expanded="false"
//             aria-label="Toggle navigation"
//           >
//             <span className="navbar-toggler-icon" />
//           </button>
//           <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
//             <Link to="/" className="navbar-brand">
//             {/* <GiShoppingBag /> */}
          
           
//             🛒 Ecommerce App
//             </Link>
//             <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//               <li className="nav-item">
//                 <NavLink to="/" className="nav-link ">
//                   Home
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/category" className="nav-link ">
//                   Products
//                 </NavLink>
//               </li>
              
//               <li className="nav-item">
//                 <NavLink to="/register" className="nav-link">
//                   Register
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/login" className="nav-link">
//                   Login
//                 </NavLink>
//               </li>
//               <li className="nav-item">
//                 <NavLink to="/cart" className="nav-link">
//                   Cart (0)
//                 </NavLink>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>
//     </>
//   );
// };
// export default Navbar;

// // import React from 'react'
// // import { Link } from 'react-router-dom'

// // const Navbar = () => {
// //   const buyerToken = localStorage.getItem("buyerToken");
// //   const sellerToken = localStorage.getItem("sellerToken");

// //   const logout = () => {
// //     localStorage.removeItem("buyerToken")
// //     localStorage.removeItem("sellerToken")
// //     // localStorage.clear()
// //   }
// //   // navbar-expand-lg bg-body-tertiary
// //   return (
// //     <>
// //       <nav class="navbar">
// //         <div class="container">
// //           <Link class="navbar-brand" to="/"><img src="/images/logo.jfif" style={{ width: "90px", height: "60px" }} alt="" /></Link>
// //           <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
// //             <span class="navbar-toggler-icon"></span>
// //           </button>
// //           <div class="collapse navbar-collapse" id="navbarSupportedContent">
// //             <ul class="navbar-nav me-auto mb-2 mb-lg-0">
// //               <li class="nav-item">
// //                 <Link class="nav-link active" aria-current="page" to="/">Home</Link>
// //               </li>
// //             </ul>
// //             <form class="d-flex" role="search">
// //               <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
// //               {
// //                 buyerToken || sellerToken ? (
// //                   <button  class="btn me-3" style={{ background: "#093d91", color: "white", width: "240px" }} onClick={logout} >Logout</button>
// //                 ) : (
// //                   <>
// //                     <Link to="/login" class="btn me-3" style={{ background: "#093d91", color: "white", width: "240px" }} >Login As Buyer</Link>
// //                     <Link to="/seller-login" class="btn" style={{ background: "#093d91", color: "white", width: "240px" }} >Login As Seller</Link></>
// //                 )
// //               }

// //             </form>
// //           </div>
// //         </div>
// //       </nav>
// //     </>
// //   )
// // }

// // export default Navbar