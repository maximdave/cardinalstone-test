import React from 'react';
import './ManageUsers.css';
import Logo from '../../../assets/CSRL Logo 1.png';

const ManageUsers = () => {
  const tableData = [
    {
      name: 'Fred Germany',
      email: 'fredgermany@mail.com',
      role_id: 'Verification Unit',
      option: 'Deactivate User',
    },
    {
      name: 'Fred Germany',
      email: 'fredgermany@mail.com',
      role_id: 'Verification Unit',
      option: 'Deactivate User',
    },
    {
      name: 'Fred Germany',
      email: 'fredgermany@mail.com',
      role_id: 'Verification Unit',
      option: 'Deactivate User',
    },
    {
      name: 'Fred Germany',
      email: 'fredgermany@mail.com',
      role_id: 'Verification Unit',
      option: 'Deactivate User',
    },
  ];
  return (
    <div className="user-page">
      <div className="user-card">
        <div className="logo-header">
          <img src={Logo} alt="csp" />
          <h4 style={{ color: '#002564' }}>Manage Users</h4>
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
                  color: '#252733',
                  fontSize: '12px',
                }}
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
          style={{ marginRight: '30px', cursor: 'pointer', color: '#528DC2' }}
        >
          View all Users
        </p>
      </div>
    </div>
  );
};

export default ManageUsers;
