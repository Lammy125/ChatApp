import axios from "axios";
import React, { useState } from "react";

const projectID = "ec45a403-7277-4306-8b80-4fdddca11957";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

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

      window.location.reload();
      setError("");
    } catch (error) {
      setError("Oops! Wrong credentials");
      setTimeout(() => {
        setError();
      }, 2000);
    }
  };

  return (
    <div className="wrapper">
      <div className="form">
        <h1 className="title">ChatApp</h1>
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
          <h2 className="error">{error}</h2>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
