import React, { useContext } from "react";
import { Select } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";
import GlobalContext from "../../../contexts/Authentication/GlobalContext";
import Logo from "../../../assets/CSRL Logo 1.png";
import Note from "../../../assets/contact-form-svgrepo-com 1.png";
import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import "./CreateUser.css";

const CreateUser = () => {
  // const history = useHistory();
  // const handleCreateUser = () => {
  //   history.push("/create-user-success");
  // };

  const {
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
    setRole,
    role,
    handleCreateOtherUsers,
  } = useContext(GlobalContext);

  const [age1, setAge1] = React.useState("");

  const handleChange1 = (event) => {
    setAge1(event.target.value);
  };
  return (
    <div className="create-user-page">
      <div className="create-user-card">
        <div className="create-user-header">
          <img src={Logo} alt="CSP" />
          <img src={Note} alt="NOTE" className="notes" />
          <h5>Create User</h5>
        </div>

        <form
          className="create-user-form m-auto"
          onSubmit={handleCreateOtherUsers}
        >
          {error && <span>{error}</span>}

          <div className="d-flex justify-content-space-around">
            <TextField
              className="create-user-input"
              label="Full Name"
              placeholder="Full name"
              onChange={(e) => setFullName(e.target.value)}
              value={fullName}
            />
            <TextField
              className=" create-user-input"
              label="Email"
              placeholder="email"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
            />
          </div>
          <div className="d-flex justify-content-space-around">
            <TextField
              className="create-user-input"
              label="Username"
              placeholder="UserName"
              onChange={(e) => setUserName(e.target.value)}
              value={userName}
            />
            <TextField
              className=" create-user-input"
              label="Phone Number"
              placeholder="Phone Number"
              onChange={(e) => setPhone(e.target.value)}
              value={phoneNumber}
            />
          </div>
          <div className=" d-flex mt-3">
            <TextField
              className="create-user-input"
              label="Create Password for user"
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <TextField
              className="create-user-input"
              label="Role"
              type="select"
              placeholder="Role"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
            {/* <Select
              className="create-user-input"
              // label="Role ID"
              // labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age1}
              placeholder="Select Reason for Rejection"
              // label="Age"
              onChange={handleChange1}
            >
              <MenuItem value="initiator">initiator</MenuItem>
              <MenuItem value="verificaion">verificaion</MenuItem>
            </Select> */}
          </div>
          <Button text="Create User" className="mt-4 create-user-btn" />

          <div className="accountzz">
            Already have an account? <b>Click here to login</b>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
