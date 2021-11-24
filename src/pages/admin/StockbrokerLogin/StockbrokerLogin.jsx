import React, { useContext } from "react";
import "./StockbrokerLogin.css";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/CSRL Logo 1.png";
import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import GlobalContext from "../../../contexts/Authentication/GlobalContext";

const StockbrokerLogin = () => {
  const history = useHistory();
  // const handleChangePassword = (e) => {
  //   e.preventDefault();
  // };

  const {
    email,
    setUserName,
    userName,
    setPassword,
    password,
    handleLogin,
    error,
    setEmail,
  } = useContext(GlobalContext);
  return (
    <div className="stockbroker-login-page">
      <div className="stockbroker-login-card">
        <div className="header-logo">
          <img src={Logo} alt="CSP" />
          <h3>STOCKBROKER'S PORTAL</h3>
          <p>User Login</p>
        </div>

        <form className="stockbroker-login-form m-auto" onSubmit={handleLogin}>
          <TextField
            className="w-100"
            type="text"
            placeholder="Username"
            label="Username"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            style={{ marginBottom: "40px" }}
          />
          {/* <TextField
            className="w-100"
            type="email"
            placeholder="Email"
            label="Email"
            // onChange={(e) => setEmail(e.target.value)}
            // value={email}
          /> */}
          <TextField
            type="password"
            className="w-100"
            placeholder="Password"
            label="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <div
            onClick={() => history.push("/change-password")}
            className="password"
          >
            Forgot Password?
          </div>
          <Button
            className="stockbroker-login-btn"
            text="LOGIN"
            // onClick={() => history.push("/change-password")}
          />
          <Button
            type="secondary"
            className="btn login-admin"
            text="Click to sign in as Admin"
            onClick={() => history.push("/")}
          />
        </form>
      </div>
    </div>
  );
};

export default StockbrokerLogin;
