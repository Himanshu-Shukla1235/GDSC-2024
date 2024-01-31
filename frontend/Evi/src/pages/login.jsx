import React from "react";
import { useState } from "react";
import "./Login.css";

const Login = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform registration logic here
    console.log("Registration data:", formData);
  };

  return (
    <>
      <main className="main">
        <div className="form">
          <form className="Form">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              required
            />

            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Password"
              required
            />

            <button type="submit">Login</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default Login;
