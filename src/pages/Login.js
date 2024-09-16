import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("")

    const formData = {email, password}

    const navigate = useNavigate()
    const submitForm = async () => {
        try {
            const response = await axios.post("http://localhost:8000/api/buyers/login", formData);
            alert("Buyer loggedin successfully");
            const token = response.data.token
            localStorage.setItem("buyerToken", token)
            navigate("/")
        } catch (error) {
            alert(error)
        }
    }
    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6 col-sm-12 left-col">
                    <h1 className='mt-4 text-center'>Login</h1>
                        <form className='mt-5 shadow p-3 mb-5 rounded' onSubmit={(e) => e.preventDefault()}>
                            <div class="row mb-3">
                                <label for="inputEmail3" class="col-sm-2 col-form-label">Email</label>
                                <div class="col-sm-10">
                                    <input type="email" class="form-control" id="inputEmail3" value = {email} onChange={(e) => setEmail(e.target.value)}/>
                                </div>
                            </div>
                            <div class="row mb-3 login">
                                <label for="inputPassword3" class="col-sm-2 col-form-label">Password</label>
                                <div class="col-sm-10">
                                    <input type="password" class="form-control" id="inputPassword3" value = {password} onChange={(e) => setPassword(e.target.value)}/>
                                </div>
                            </div>
                            <p className='signup1'>Dont have an account ? click here to <Link to = "/register">signup </Link></p>
                            <div className="text-center">
                            <button type="submit" class="btn" style={{background : "#69b1b5", color : "black", width : "140px"}} onClick={submitForm}>Sign in</button>
                            </div>
                            
                        </form>
                    </div>
                    <div className="col-lg-6 col-md-6 col-sm-12 right-col-col">
                        <img src="/images/register.jpg" alt="" style={{ height: "600px", width: "700px" }} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;