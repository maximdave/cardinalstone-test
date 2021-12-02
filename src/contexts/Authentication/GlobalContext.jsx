import React, { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useHistory } from "react-router-dom";

import axios from "axios";

const GlobalContext = createContext();
export const GlobalContextProvider = ({ children }) => {
  const history = useHistory();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const [companyName, setcomapanyName] = useState("");
  const [phoneNumber, setPhone] = useState("");
  const [role, setRole] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [inRequest, setinRequest] = useState({});

  const handleInRequest = async (item) => {
    setinRequest(item);
    // history.push("/initiatorDashboard/inrequest");
  };

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
      toast.success("Successful");
      localStorage.setItem("authToken", data.token);
      history.push("/loginadmin");
    } catch (err) {
      toast.error("An errror occured");
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleCreateStockbroker = async (e) => {
    e.preventDefault();

    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/sbp/createStockbrokers",
        {
          // firstName: fullName.split(" ")[0],
          // lastName: fullName.split(" ")[1],
          userName,
          email,
          password,
          phoneNumber,
          companyName,
        },
        config
      );
      console.log("data:::::", data);
      toast.success("Successful");
      history.push(`/create-user-success`);
    } catch (err) {
      toast.error("An error occured");
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleCreateOtherUsers = async (e) => {
    e.preventDefault();

    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      const { data } = await axios.post(
        "http://localhost:5000/sbp/createotheruser",
        {
          firstName: fullName.split(" ")[0],
          lastName: fullName.split(" ")[1],
          userName,
          email,
          password,
          phoneNumber,
          role,
        },
        config
      );
      console.log("data:::::", data);
      toast.success("Successful");
      history.push(`/create-user-success`);
    } catch (err) {
      toast.error("An error occured");
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
      console.log("ROLE:::::", data.user.existingUser.role);
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("currentUserName", data.user.userInfo.userName);
      localStorage.setItem(
        "currentFirstName",
        data.user.userInfo.companyName.split(" ")[0]
      );
      localStorage.setItem(
        "currentLastName",
        data.user.userInfo.companyName.split(" ")[1]
      );
      localStorage.setItem(
        "currenUser",
        JSON.parse(JSON.stringify(data.user.userInfo))
      );

      setUser(data.user);
      toast.success("Successful");

      if (
        data.user.userInfo.role === "stockbroker" &&
        password === "Password123"
      ) {
        history.push("/change-password");
        return;
      }
      history.push(`/${data.user.userInfo.role}dashboard/overview`);
    } catch (err) {
      toast.error("An error occured");
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  const handleLoginAdmin = async (e) => {
    e.preventDefault();

    const config = {
      header: {
        "Content-type": "application/json",
      },
    };

    try {
      const { data } = await axios.post(
        "http://localhost:5000/user/loginadmin",
        {
          userName,
          password,
        },
        config
      );
      console.log("data:::::", data);
      console.log("ROLE:::::", data.role);
      localStorage.setItem("authToken", data.token);
      localStorage.setItem("currentUserName", data.userName);
      localStorage.setItem("currentFirstName", data.fullName.split(" ")[0]);
      localStorage.setItem("currentLastName", data.fullName.split(" ")[1]);
      localStorage.setItem("currenUser", JSON.stringify(data));

      setUser(data.user);
      toast.success("Login Successful");
      history.push(`/${data.role}dashboard/overview`);
    } catch (err) {
      toast.error("An error occured");
      setError(err.response.data.error);
      setTimeout(() => {
        setError("");
      }, 5000);
    }
  };

  // eslint-disable-next-line consistent-return
  const handleChangePassword = async (e) => {
    e.preventDefault();

    if (newPassword === "") {
      toast.error("Passwords Cannot be Empty");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("passwords do not match");
    }

    if (newPassword !== confirmPassword) {
      toast.error("Passwords do not match");
      setPassword("");
      setConfirmPassword("");
      setTimeout(() => {
        setError("");
      }, 5000);
      return setError("passwords do not match");
    }

    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      const { data } = await axios.put(
        "http://localhost:5000/sbp/changePassword",
        {
          newPassword,
        },
        config
      );
      console.log("data:::::", data);
      toast.success("Password Changed Successfully");
      history.push(`/indemnity-agreement`);
    } catch (err) {
      toast.error("An error occured");
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
    userName,
    setEmail,
    fullName,
    setFullName,
    email,
    setPassword,
    password,
    setConfirmPassword,
    error,
    user,
    setcomapanyName,
    setPhone,
    setRole,
    role,
    handleCreateStockbroker,
    handleCreateOtherUsers,
    handleLoginAdmin,
    handleInRequest,
    inRequest,
    handleChangePassword,
    newPassword,
    setNewPassword,
  };

  return (
    <GlobalContext.Provider value={state}>{children}</GlobalContext.Provider>
  );
};

export default GlobalContext;
