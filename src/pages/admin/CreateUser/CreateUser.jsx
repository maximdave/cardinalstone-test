import React, { useContext } from "react";
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
              label="Role ID"
              type="select"
              placeholder="Role ID"
              onChange={(e) => setRole(e.target.value)}
              value={role}
            />
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
