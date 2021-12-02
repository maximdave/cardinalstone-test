import { useEffect } from "react";

const Logout = () => {
  useEffect(() => {
    localStorage.removeItem("currenUser");
    localStorage.removeItem("currentFirstName");
    localStorage.removeItem("currentUserName");
    localStorage.removeItem("currentLastName");
    localStorage.removeItem("authToken");
    window.location = "http://localhost:3000/user-login";
  }, []);

  return null;
};

export default Logout;
