import React, { useContext } from "react";
import "./AdminLogin.css";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/CSRL Logo 1.png";
import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import GlobalContext from "../../../contexts/Authentication/GlobalContext";

const AdminLogin = () => {
  const history = useHistory();

  const {
    setUserName,
    userName,
    setPassword,
    password,
    handleLoginAdmin,
    error,
  } = useContext(GlobalContext);
  return (
    <div className="admin-login-page">
      <div className="admin-login-card">
        <div className="header-logo">
          <img src={Logo} alt="CSP" />
          <h3>STOCKBROKER'S PORTAL</h3>
          <p>Admin Login</p>
        </div>

        <form onSubmit={handleLoginAdmin} className="admin-login-form m-auto">
          {error && <span>{error}</span>}

          <TextField
            className="w-100 username"
            label="Admin Username"
            placeholder="Admin Username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
          />
          <TextField
            className="w-100"
            label="Admin Password"
            placeholder="Admin Password"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div onClick={() => history.push("/")} className="password">
            Forgot Password?
          </div>
          <Button
            className="admin-login-btn"
            text="LOGIN"
            // onClick={() => history.push("/admin-page")}
          />
        </form>
      </div>
    </div>
  );
};

export default AdminLogin;
