import React from "react";
import "./custom-table.css";

const CustomTable = ({ children, tableHeader }) => {
  return (
    <div>
      <table className="custom-table">
        <thead className="custom_table_header">
          <tr className="header-row">
            {tableHeader?.map((el) => (
              <th>{el}</th>
            ))}
          </tr>
        </thead>
        <tbody className="custom-table-body-row">{children}</tbody>
      </table>
    </div>
  );
};

export default CustomTable;
