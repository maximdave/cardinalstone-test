import React from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../../assets/CSRL Logo 1.png';
import Note from '../../../assets/contact-form-svgrepo-com 1.png';
import Button from '../../../components/Button/Button';
import TextField from '../../../components/TextField/TextField';
import './CreateUser.css';

const CreateUser = () => {
  const history = useHistory();
  const createUser = () => {
    history.push('/create-user-success');
  };
  return (
    <div className="create-user-page">
      <div className="create-user-card">
        <div className="create-user-header">
          <img src={Logo} alt="CSP" />
          <img src={Note} alt="NOTE" className="note" />
          <h5>Create User</h5>
        </div>

        <form className="create-user-form m-auto" onSubmit={createUser}>
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
              placeholder="Enter password"
            />
            <TextField
              className="create-user-input"
              label="Role ID"
              placeholder="Role ID"
            />
          </div>
          <Button text="Create User" className="mt-4 create-user-btn" />
          <p>Already have an account? Click here to login</p>
        </form>
      </div>
    </div>
  );
};

export default CreateUser;
