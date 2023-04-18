import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRedirectWithAuthenticated } from "../../../hooks/redirect.hook";

const projectID = "03f241be-6781-455c-8997-45555854442c";

const LoginForm = () => {
  useRedirectWithAuthenticated();
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const authObject = {
      "Project-ID": projectID,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      await axios.get("https://api.chatengine.io/chats", {
        headers: authObject,
      });

      localStorage.setItem("username", username);
      localStorage.setItem("password", password);

      setSuccess("Successfully logged in!");
      setTimeout(() => {
        setSuccess("");
        navigate("/");
      }, 2000);
      setError("");
    } catch (error) {
      setSuccess("");
      setError("Oops! Wrong credentials");
      setTimeout(() => {
        setError("");
      }, 2000);
    }
  };

  const handleRegisterClick = () => {
    navigate("/register");
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
              Login
            </button>
          </div>
          <div align="center">
            <button
              type="button"
              className="button"
              style={{ marginTop: "20px" }}
              onClick={handleRegisterClick}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
