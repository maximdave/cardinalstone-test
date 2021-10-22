import React from "react";
import "./custom-table.css";

const CustomTable = ({ tableProps, tableHeader }) => {
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
        <tbody className="custom-table-body-row">
          {tableProps?.map((tb, idx) => (
            <tr key={idx}>
              <td>{tb.id}</td>
              <td>{tb.date}</td>
              <td>
                <strong>{tb.type}</strong>
              </td>
              <td>{tb.stockbroker}</td>
              <td>
                <p className={typeof tb.status === "string" && "status"}>
                  {tb.status}
                </p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomTable;
