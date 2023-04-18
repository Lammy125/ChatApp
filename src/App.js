import { Routes, Route } from "react-router-dom";
import "./App.css";

import LoginForm from "./pages/auth/login/LoginForm";
import RegisterForm from "./pages/auth/register/RegisterForm";
import Chat from "./pages/chat/Chat";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  // if (!localStorage.getItem("username")) {
  //   return <LoginForm />;
  // }

  return (
    <>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />

        <Route element={<PrivateRoute />}>
          <Route path="/" element={<Chat />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
