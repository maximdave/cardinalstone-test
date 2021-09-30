import React, { useState } from "react";
import "./ManageUsers.css";
import Logo from "../../../assets/CSRL Logo 1.png";
import Modal from "../../../components/Modal/Modal";
// import Backdrop from '../../../components/Backdrop/Backdrop';

const ManageUsers = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  function deleteHandler() {
    setModalIsOpen(true);
  }

  function closeModalHandler() {
    setModalIsOpen(false);
  }

  const tableData = [
    {
      name: "Fred Germany",
      email: "fredgermany@mail.com",
      role_id: "Verification Unit",
      option: "Deactivate User",
    },
    {
      name: "Fred Germany",
      email: "fredgermany@mail.com",
      role_id: "Verification Unit",
      option: "Deactivate User",
    },
    {
      name: "Fred Germany",
      email: "fredgermany@mail.com",
      role_id: "Verification Unit",
      option: "Deactivate User",
    },
    {
      name: "Fred Germany",
      email: "fredgermany@mail.com",
      role_id: "Verification Unit",
      option: "Deactivate User",
    },
  ];
  return (
    <div className="user-page">
      <div className="muser-card">
        <div className="logo-header">
          <img src={Logo} alt="csp" />
          <h4 style={{ color: "#002564" }}>Manage Users</h4>
        </div>

        <table className="table manager-users-table">
          <thead className="thead-primary">
            <tr className="table-head">
              <th table-header>S/N</th>
              <th table-header>FULL NAME</th>
              <th table-header>EMAIL</th>
              <th table-header>ROLE ID</th>
              <th table-header />
            </tr>
          </thead>
          <tbody>
            {tableData.map((data, index) => (
              <tr
                key={index}
                className="table-list"
                style={{
                  color: "#252733",
                  fontSize: "12px",
                }}
                onClick={deleteHandler}
              >
                <td>{index + 1}</td>
                <td>{data.name}</td>
                <td>{data.email}</td>
                <td>{data.role_id}</td>
                <td>{data.option}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p
          className="text-right"
          style={{ marginRight: "30px", cursor: "pointer", color: "#528DC2" }}
        >
          View all Users
        </p>
      </div>

      {modalIsOpen && (
        <Modal onCancel={closeModalHandler} onConfirm={closeModalHandler} />
      )}
      {/* {modalIsOpen && <Backdrop onCancel={closeModalHandler} />} */}
    </div>
  );
};

export default ManageUsers;
