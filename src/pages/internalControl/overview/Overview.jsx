/* eslint-disable react/jsx-key */
/* eslint-disable react/jsx-props-no-spreading */
import React, { useMemo } from "react";
import { useTable } from "react-table";
import { NavLink } from "react-router-dom";
import SearchBar from "../../../components/stockrequest/SearchBar";
import NumberCard2 from "../../../components/stockrequest/NumberCard2";
import "./overview.css";

const Overview = () => {
  const data = useMemo(
    () => [
      {
        idNumber: "DR23554",
        date: "12 Aug 2021",
        requestType: "Demat Request  ",
        stockbroker: "AFRI Invest",
        status: "Submitted",
      },
      {
        idNumber: "SA54435",
        date: "12 Sept 2021",
        requestType: "Correction of Name",
        stockbroker: "Century Securities",
        status: "Captured",
      },
      {
        idNumber: "OS15445",
        date: "12 Aug 2021",
        requestType: "Request for Outstanding Shares ",
        stockbroker: "Dominion Trust Limited",
        status: "Verified, awaiting approval",
      },
      {
        idNumber: "OD56643",
        date: "12 Aug 2021",
        requestType: "Request for Outstanding Dividends ",
        stockbroker: "AFRI Invest",
        status: "Submitted",
      },
    ],
    []
  );

  const columns = useMemo(
    () => [
      {
        Header: "ID NO",
        accessor: "idNumber", // accessor is the "key" in the data
      },
      {
        Header: "DATE",
        accessor: "date",
      },
      {
        Header: "REQUEST TYPE",
        accessor: "requestType",
      },
      {
        Header: "STOCKBROKER",
        accessor: "stockbroker",
      },
      {
        Header: "STATUS",
        accessor: "status",
      },
    ],
    []
  );

  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({ columns, data });
  return (
    <div>
      <div className="dashboard_requests_header22">
        <h3>Overview</h3>
      </div>
      <div className="dashboard_header22">
        <NumberCard2
          // onClick={() => history.push("/requestdashboard/requests")}
          text="Stockbrokers’ requests"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
        />
        <NumberCard2
          text="Approved callovers"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
        />
        <NumberCard2
          text="Rejected callovers"
          number={2}
          bgColor="linear-gradient(103.92deg, #002564 1.19%, #528DC2 100%)"
        />
      </div>
      <div className="dashboard_requests_header ">
        <h3 style={{ fontSize: "2rem" }}>Recent Requests</h3>
      </div>
      <div className="search_options">
        <SearchBar />
      </div>

      <div className="view_more_payments">
        <NavLink to="viewmore">View All Payment</NavLink>
      </div>

      <div style={{ marginTop: "2em" }} className="table">
        <table
          cellSpacing={0}
          {...getTableProps()}
          style={{
            width: "100%",
          }}
        >
          <thead
            style={{
              background: " #528DC2 ",
              color: "#ffffff",
              fontWeight: 800,
              padding: "15px",
              fontSize: "1rem",
              width: "100%",
            }}
          >
            {headerGroups.map((headerGroup) => (
              <tr style={{}} {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map((column) => (
                  <th
                    {...column.getHeaderProps()}
                    style={{
                      padding: "1em .5em",
                      textAlign: "left",
                    }}
                  >
                    {/* {true ? 'Paid': <Link} */}
                    {column.render("Header")}
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody {...getTableBodyProps()}>
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr {...row.getRowProps()}>
                  {row.cells.map((cell) => (
                    <td
                      {...cell.getCellProps()}
                      style={{ padding: "1em .5em" }}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;
