import React, { useHistory } from "react";
// import UserCreationContext from "../../../contexts/Authentication/UserCreationContext";
import Logo from "../../../assets/CSRL Logo 1.png";
import Note from "../../../assets/contact-form-svgrepo-com 1.png";
import Button from "../../../components/Button/Button";
import TextField from "../../../components/TextField/TextField";
import "./CreateUser.css";

const CreateUser = () => {
  const history = useHistory();
  const handleCreateUser = () => {
    history.push("/create-user-success");
  };
  return (
    <div className="create-user-page">
      <div className="create-user-card">
        <div className="create-user-header">
          <img src={Logo} alt="CSP" />
          <img src={Note} alt="NOTE" className="notes" />
          <h5>Create User</h5>
        </div>

        <form className="create-user-form m-auto" onSubmit={handleCreateUser}>
          <div className="d-flex justify-content-space-around">
            <TextField
              className="create-user-input"
              label="Full Name"
              placeholder="Full name"
            />
            <TextField
              className=" create-user-input"
              label="Email"
              placeholder="email"
            />
          </div>
          <div className=" d-flex mt-3">
            <TextField
              className="create-user-input"
              label="Create Password for user"
              type="password"
              placeholder="Enter password"
            />
            <TextField
              className="create-user-input"
              label="Role ID"
              type="select"
              placeholder="Role ID"
            />
          </div>
          <Button text="Create User" className="mt-4 create-user-btn" />

          <div onClick={() => history.push("/")} className="accountzz">
            Already have an account? <b>Click here to login</b>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
