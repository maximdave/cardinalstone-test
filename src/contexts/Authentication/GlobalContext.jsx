import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

import axios from "axios";

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [companyName, setcomapanyName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [role, setRole] = useState("");

  // eslint-disable-next-line consistent-return
  const handleSubmit = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-type": "application/json",
      },
    };

    if (password !== confirmPassword) {
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("passwords do not match");
    }

    try {
      const { data } = await axios.post(
        "http://localhost:5000/admin/signup",
        {
          firstName,
          lastName,
          userName,
          password,
          email,
        },
        config
      );
      localStorage.setItem("authToken", data.token);
      history.push("/loginadmin");
    } catch (err) {
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleCreateStockbroker = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/sbp/createStockbrokers",
        {
          email,
          password,
          phoneNumber,
          companyName,
        },
        config
      );
      console.log("data:::::", data);
      history.push(`/create-user-success`);
    } catch (err) {
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/user/login",
        {
          userName,
          password,
        },
        config
      );
      console.log("data:::::", data);
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("currentUser", data.user.userName);

      setUser(data.user);
      history.push(`/${data.user.role}dashboard`);
    } catch (err) {
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const state = {
    handleLogin,
    handleSubmit,
    setFirstName,
    setLastName,
    setUserName,
    setEmail,
    email,
    setPassword,
    password,
    setConfirmPassword,
    error,
    user,
    setcomapanyName,
    setPhone,
    setRole,
    handleCreateStockbroker,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
