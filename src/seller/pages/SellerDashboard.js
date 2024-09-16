import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SellerDashboard = () => {
  const token = localStorage.getItem("sellerToken")

  const navigate = useNavigate()
  useEffect(() => {
    if (!token) {
      navigate("/seller-login")
    }
  }, [token, navigate])

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("");
  const [img, setImg] = useState("");
  const [products, setProducts] = useState([]); // Declare setProducts here

  const formData = {title, description, price, category, img};

  const submitForm = async () => {
    try {
      await axios.post("http://localhost:8000/api/products/add-product", formData, { 
        headers: { Authorization: token } // Make sure the token is passed in headers
      });
      alert("Product added successfully");
      getProducts(); // Fetch the updated products after adding a new one
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);
  
  const getProducts = async () => {
    try {
      const response = await axios.get("http://localhost:8000/api/products/get-products-for-seller", { 
        headers: { Authorization: token }
      });
      setProducts(response.data); // Set the products state
    } catch (error) {
      console.error(error);
    }
  };
  
  return (
    <>
      <div className="container">
        <h1 className="text-center mt-4 mb-4">Add New Product</h1>
        <form className="row g-3 mt-5 shadow p-3 mb-5 rounded" onSubmit={(e) => e.preventDefault()}>
          <div className="col-md-6">
            <label htmlFor="inputEmail4" className="form-label">Title</label>
            <input type="text" className="form-control" id="inputEmail4" value={title} onChange={(e) => setTitle(e.target.value)} />
          </div>
          <div className="col-md-6">
            <label htmlFor="inputPassword4" className="form-label">Price</label>
            <input type="number" className="form-control" id="inputPassword4" value={price} onChange={(e) => setPrice(e.target.value)} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress" className="form-label">Description</label>
            <input type="text" className="form-control" id="inputAddress" value={description} onChange={(e) => setDescription(e.target.value)} />
          </div>
          <div className="col-12">
            <label htmlFor="inputAddress2" className="form-label">Category</label>
            <input type="text" className="form-control" id="inputAddress2" value={category} onChange={(e) => setCategory(e.target.value)} />
          </div>
          <div className="col-md-12">
            <label htmlFor="inputCity" className="form-label">Image</label>
            <input type="text" className="form-control" id="inputCity" value={img} onChange={(e) => setImg(e.target.value)} />
          </div>

          <div className="text-center">
            <button type="submit" className="btn btn-primary" onClick={submitForm}>Add Product</button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SellerDashboard;


// import axios from 'axios'
// import React, { useEffect, useState } from 'react'
// import { useNavigate } from 'react-router-dom'

// const SellerDashboard = () => {
//   const token = localStorage.getItem("sellerToken")

//   const navigate = useNavigate()
//   useEffect(() => {
//     if (!token) {
//       navigate("/seller-login")
//     }
//   })

//   const [title, setTitle] = useState("");
//   const [description, setDescription] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [img, setImg] = useState("")

//   const formData = {title, description, price, category, img}

//   const submitForm = async () => {
//     try {
//       await axios.post("http://localhost:8000/api/products/add-product", formData)
//       alert("product addedd successfully")
//     } catch (error) {
//       alert(error)
//     }
//   };

//   useEffect(() => {
//     getProducts(); // Function to fetch products
//   }, []);
  
//   const getProducts = async () => {
//     try {
//       const response = await axios.get("http://localhost:8000/api/products/get-products-for-seller", { headers: { Authorization: token } });
//       setProducts(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
  
//   return (
//     <>
//       <div className="container">
//       <h1 className='text-center mt-4 mb-4'>Add New Product</h1>
//         <form class="row g-3">
//         <form className='mt-5 shadow p-3 mb-5 rounded' onSubmit={(e) => e.preventDefault()}> onSubmit={(e) => e.preventDefault()}</form>
//           <div class="col-md-6">
//             <label for="inputEmail4" class="form-label">Title</label>
//             <input type="text" class="form-control" id="inputEmail4" value = {title} onChange={(e) => setTitle(e.target.value)}/>
//           </div>
//           <div class="col-md-6">
//             <label for="inputPassword4" class="form-label">Price</label>
//             <input type="number" class="form-control" id="inputPassword4" value = {price} onChange={(e) => setPrice(e.target.value)}/>
//           </div>
//           <div class="col-12">
//             <label for="inputAddress" class="form-label">Description</label>
//             <input type="text" class="form-control" id="inputAddress"  value = {description} onChange={(e) => setDescription(e.target.value)}/>
//           </div>
//           <div class="col-12">
//             <label for="inputAddress2" class="form-label">Category</label>
//             <input type="text" class="form-control" id="inputAddress2"  value = {category} onChange={(e) => setCategory(e.target.value)}/>
//           </div>
//           <div class="col-md-12">
//             <label for="inputCity" class="form-label">Image</label>
//             <input type="text" class="form-control" id="inputCity" value = {img} onChange={(e) => setImg(e.target.value)}/>
//           </div>
          
          
          
//           <div class="text-center">
//             <button type="submit" class="btn btn-primary" onClick={submitForm}>Add Product</button>
//           </div>
//         </form>
//       </div>
//     </>
//   )
// }

// export default SellerDashboard