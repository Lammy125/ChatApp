import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PRIVATE_KEY } from "../../../constants/constants";

const RegisterForm = () => {
  const navigate = useNavigate();

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      email,
      username,
      secret: password,
    };

    try {
      const response = await axios.post(
        "https://api.chatengine.io/users/",
        data,
        {
          headers: {
            "PRIVATE-KEY": `{{${PRIVATE_KEY}}}`, // your own private key
          },
        }
      );

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      console.log(response.data);
      setSuccess("User registered successfully!");

      setError("");
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 2000);
      setError("");
    } catch (error) {
      console.log(error);
      setSuccess("");
      setError("Failed to register user. Please try again.");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">ChatApp</h1>
        <h2 className="success">{success}</h2>
        <h2 className="error">{error}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            placeholder="First Name"
            className="input"
            required
          />
          <input
            type="text"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            placeholder="Last Name"
            className="input"
            required
          />
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            className="input"
          />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Username"
            className="input"
            required
          />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="********"
            className="input"
            required
          />
          <div align="center">
            <button type="submit" className="button">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
