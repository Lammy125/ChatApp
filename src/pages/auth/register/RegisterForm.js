import axios from "axios";
import React, { useState } from "react";

// const projectID = "03f241be-6781-455c-8997-45555854442c";

const RegisterForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [avatar, setAvatar] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      // "Project-ID": projectID,
      first_name: firstName,
      last_name: lastName,
      email,
      "User-Name": username,
      "User-Secret": password,
    };

    try {
      const response = await axios.post(
        "https://api.chatengine.io/chats",
        data,
        {
          headers: {
            "PRIVATE-KEY": "{{ee3753c7-c0ec-4df7-89d2-71e26af3dd8e}}",
          },
        }
      );

      console.log(response.data);
      setSuccess("User registered successfully!");
      setError("");
    } catch (error) {
      console.log(error);
      setSuccess("");
      setError("Failed to register user. Please try again.");
    }
  };

  return (
    <div className="wrapper">
      <h2 className="error1">{error}</h2>
      <h2 className="success">{success}</h2>
      <div className="form">
        <h1 className="title">ChatApp</h1>
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
          <input
            type="file"
            value={avatar}
            onChange={(e) => setAvatar(e.target.value)}
            placeholder="********"
            className="input"
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

export default RegisterForm;
