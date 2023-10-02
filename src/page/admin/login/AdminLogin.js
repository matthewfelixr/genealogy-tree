import React, { useState } from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import "./AdminLogin.css"
import axios from "axios";

function AdminLogin() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error,setError] = useState()
  const [loading,setLoading] = useState(false)

  const onSubmit = async (data) => {
    setLoading(true)
    try {
      const res = await axios.post("https://gen-tree-backend-fe240a55091e.herokuapp.com/api/v1/admin", data);
      // console.log(res.data.data);
      const token = res.data.data.token;
      localStorage.setItem("token", token);
      // console.log("Token saved to local storage:", token);
      window.location.reload(true);
    } catch (error) {
      setError(error.response.data);
      setLoading(false)
    }
  };


  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div className="login-container mx-auto my-5 p-5">
          <div className="login-logo text-center">
            <img src="/image/admin-logo.png" alt="admin-logo"/>
          </div>
          <div className="login-form">
            <p className="login-form-title text-center mb-3"> Admin Login </p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label htmlFor="username">Username</label>
                <input className={ `form-input ${errors.userName ? "border-danger border-2": ""}`} {...register('userName', { required: true })}
                />
                {errors.userName && <span className="text-danger">Username kosong! </span>}
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <input className={ `form-input ${errors.password? "border-danger border-2": ""}`} type="password" {...register('password', { required: true })}
                />
                {errors.password && <span className="text-danger">Password Kosong! </span>}
              </div>
              <button className={`btn-login mt-2 ${loading === true ? "disabled btn btn-secondary" : ""}`}>Login</button>
              
              <span className={`text-danger ${error ? "d-block" : "d-none"}`}>{error}</span>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
