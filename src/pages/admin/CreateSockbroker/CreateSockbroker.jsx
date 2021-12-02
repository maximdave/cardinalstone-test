import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import Logo from "../../../assets/CSRL Logo 1.png";
import Note from "../../../assets/contact-form-svgrepo-com 1.png";
import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import GlobalContext from "../../../contexts/Authentication/GlobalContext";

import "./CreateSockbroker.css";

const CreateSockbroker = () => {
  const history = useHistory();
  // const createUser = () => {
  //   history.push("/create-user-success");
  // };
  const {
    setcomapanyName,
    companyName,
    setPassword,
    password,
    email,
    setFullName,
    fullName,
    setUserName,
    userName,
    setEmail,
    phoneNumber,
    setPhone,
    error,
    handleCreateStockbroker,
  } = useContext(GlobalContext);
  return (
    <div className="create-stockerbroker-page">
      <div className="create-stockerbroker-card">
        <div className="create-stockerbroker-header">
          <img src={Logo} alt="CSP" />
          <img src={Note} alt="NOTE" className="note" />
          <h5>Create Stockbroker</h5>
        </div>

        <form
          className="create-stockerbroker-form m-auto"
          onSubmit={handleCreateStockbroker}
        >
          {error && <span>{error}</span>}

          <div className="d-flex justify-content-space-around">
            <TextField
              className="create-stockerbroker-input"
              label="Name of Company"
              placeholder="Name of Company"
              onChange={(e) => setcomapanyName(e.target.value)}
              value={companyName}
            />
            <TextField
              className=" create-stockerbroker-input"
              label="Company Email Address"
              placeholder="Company Email Address"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="d-flex justify-content-space-around">
            {/* <TextField
              className="create-stockerbroker-input"
              label="Full Name"
              placeholder="Full Name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            /> */}
            {/* <TextField
              className=" create-stockerbroker-input"
              label="Username"
              placeholder="Username"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            /> */}
          </div>
          <div className=" d-flex mt-3">
            <TextField
              className=" create-stockerbroker-input"
              label="Username"
              placeholder="Username"
              required
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <TextField
              className="create-stockerbroker-input"
              label="Phone Number"
              placeholder="Phone Number"
              required
              onChange={(e) => setPhone(e.target.value)}
              value={phoneNumber}
            />
            {/* <TextField
              className="create-stockerbroker-input"
              label="Alternative Phone Number"
              placeholder="Alternative Phone Number"
            /> */}
          </div>
          <div className=" d-flex mt-3">
            <TextField
              className="create-stockerbroker-input"
              label="Create password for user"
              placeholder="Enter Password"
              required
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TextField
              className="create-stockerbroker-input"
              label="Role ID"
              placeholder="STOCKBROKER"
            />
          </div>
          <Button
            text="CREATE STOCKBROKER"
            className="mt-4 create-stockerbroker-btn"
          />
          <div onClick={() => history.push("/")} className="accountzz">
            Already have an account? <b>Click here to login</b>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateSockbroker;
