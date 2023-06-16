import React from "react";
import Navbar from "../../../components/Navbar/Navbar";
import { useForm } from "react-hook-form";
import "./AdminLogin.css"

function AdminLogin() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

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
              <label className="login-form-label"> Email </label>
              <input
                className="form-input px-2 mx-auto mb-2"
                type="email"
                placeholder="Email"
                {...register("Email", {
                  required: true,
                  pattern: /^\S+@\S+$/i,
                })}
              />
              <label className="login-form-label"> Password </label>
              <input
                className="form-input px-2 mx-auto mb-2"
                type="password"
                placeholder="Password"
                {...register("Password", {
                  required: true,
                  pattern: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/i,
                })}
              />
              <input className="btn-login mt-4" type="submit" />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminLogin;
