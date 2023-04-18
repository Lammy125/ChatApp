import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import RegisterForm from "../pages/auth/register/RegisterForm";
import LoginForm from "../pages/auth/login/LoginForm";

Route = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" component={LoginForm} />
        <Route path="/register" component={RegisterForm} />
      </Routes>
    </Router>
  );
};

export default Route;
