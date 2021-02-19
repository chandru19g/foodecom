import React, { useState } from "react";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import equals from "validator/lib/equals";
import { showErrorMsg, showSuccessMsg } from "../helpers/message";
import { showLoading } from "../helpers/loading";
import { Link } from "react-router-dom";
import "./Signup.css";
import { signup } from "../api/auth";

//TODO: From video 10

const Signup = () => {
  const [formData, setformData] = useState({
    username: "",
    email: "",
    password: "",
    password2: "",
    successMsg: false,
    errorMsg: false,
    loading: false,
  });

  const {
    username,
    email,
    password,
    password2,
    successMsg,
    errorMsg,
    loading,
  } = formData;
  /************
    //!Event Handler
    ************/
  const handleChange = (evt) => {
    //console.log(evt);
    setformData({
      ...formData,
      [evt.target.name]: evt.target.value,
      successMsg: "",
      errorMsg: "",
    });
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();
    //? Validation
    if (
      isEmpty(username) ||
      isEmpty(email) ||
      isEmpty(password) ||
      isEmpty(password2)
    ) {
      setformData({
        ...formData,
        errorMsg: "All fields are required",
      });
    } else if (!isEmail(email)) {
      setformData({
        ...formData,
        errorMsg: "Invalid Email",
      });
    } else if (!equals(password, password2)) {
      setformData({
        ...formData,
        errorMsg: "Passwords Mismatch",
      });
    } else {
      const { username, email, password } = formData;
      const data = { username, email, password };

      setformData({ ...formData, loading: true });

      signup(data)
        .then((response) => {
          console.log(response);
          setformData({
            username: "",
            email: "",
            password: "",
            password2: "",
            loading: false,
            successMsg: response.data.successMessage,
          });
        })
        .catch((err) => {
          console.log("Axios signup error", err);
          setformData({
            ...formData,
            loading: false,
          });
        });
    }
  };

  const SignupForm = () => (
    /************
    //!SIGNUPFORM
    ************/
    <form
      className="signup-form"
      autoComplete="off"
      onSubmit={handleSubmit}
      noValidate
    >
      {/* //!UserName  */}
      <div className="form-group input-group">
        <div className="input-group flex-nowrap">
          <span className="input-group-text">
            <i className="fa fa-user"></i>
          </span>
          <input
            name="username"
            value={username}
            type="text"
            className="form-control"
            placeholder="Username"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
      {/* //!Email */}
      <div className="form-group input-group">
        <div className="input-group flex-nowrap">
          <span className="input-group-text">
            <i className="fa fa-envelope"></i>
          </span>
          <input
            name="email"
            value={email}
            type="email"
            class="form-control"
            placeholder="Email"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
      {/* //!Password */}
      <div className="form-group input-group">
        <div className="input-group flex-nowrap">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
          <input
            name="password"
            value={password}
            type="password"
            className="form-control"
            placeholder="Password"
            onChange={handleChange}
          />
        </div>
      </div>
      <br />
      {/* //!Confirm Password */}
      <div className="form-group input-group">
        <div className="input-group flex-nowrap">
          <span className="input-group-text">
            <i className="fa fa-lock"></i>
          </span>
          <input
            name="password2"
            value={password2}
            type="password"
            className="form-control"
            placeholder="Confirm Password"
            onChange={handleChange}
          />
        </div>
      </div>
      {/* //!Signup Button */}
      <br />
      <div className="form-group d-grid gap-2">
        <button className="btn btn-primary btn-block" type="submit">
          Signup
        </button>
      </div>
      {/* //!Already have an account */}
      <br />
      <p className="text-center text-dark">
        Have an account? <Link to="/signin">Log In</Link>
      </p>
    </form>
  );
  /************
    //!RENDER
    ************/
  return (
    <div className="signup-container">
      <div className="row px-3 vh-100">
        <div className="col-md-5 mx-auto align-self-center">
          {" "}
          {successMsg && showSuccessMsg(successMsg)}
          {errorMsg && showErrorMsg(errorMsg)}
          {loading && <div className="text-center pb-4">{showLoading()}</div>}
          {SignupForm()}
          {/* <p className="fw-bold p-3 mb-2 bg-primary text-red">
            {JSON.stringify(formData)}
          </p> */}
        </div>
      </div>
    </div>
  );
};

export default Signup;
