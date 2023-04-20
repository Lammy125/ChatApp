import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const useRedirectWithAuthenticated = () => {
  const navigate = useNavigate();
  const authenticated = localStorage.getItem("username");

  useEffect(() => {
    if (authenticated) navigate("/");
  }, [authenticated, navigate]);
};
