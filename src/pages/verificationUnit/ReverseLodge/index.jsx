import React, { useState } from "react";
import CustomTable from "../../../components/CustomTable";
import "./ReverseLodge.css";

const ReverseLodge = () => {
  const [showReverseOption, setShowReverseOption] = useState(false);
  const tableHeader = [
    "ID NO",
    "Date",
    "Request Type",
    "Stockbroker",
    "Status",
    ".",
  ];
  const tableProps = [
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Submitted",
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Submitted",
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Submitted",
    },
    {
      id: "DR23554",
      date: "24 Aug 2021",
      type: "Demat Request",
      stockbroker: "Afri Invest",
      status: "Submitted",
    },
  ];
  return (
    <div>
      <div>
        <h3>Reverse Lodgements</h3>
        <input
          className="reverse-lodge-input"
          type="text"
          placeholder="Input request ID"
        />
        <span>
          <button className="primary-btn">Search</button>
        </span>
      </div>

      <div>
        <CustomTable tableHeader={tableHeader}>
          {tableProps.splice(0, 1)?.map((tb, idx) => (
            <tr key={idx}>
              <td>{tb.id}</td>
              <td>{tb.date}</td>
              <td>
                <strong>{tb.type}</strong>
              </td>
              <td>{tb.stockbroker}</td>
              <td className="d-flex">
                <p className="reverse-lodge-status">{tb.status}</p>
              </td>
              <td>
                <button
                  className="primary-btn"
                  onClick={() => setShowReverseOption((prev) => !prev)}
                >
                  REVERSE
                </button>
              </td>
            </tr>
          ))}
        </CustomTable>
      </div>

      {showReverseOption && (
        <div className="reverse-prompt">
          <button className="success-btn">CONFIRM</button>
          <button className="danger-btn">CANCEL</button>
        </div>
      )}
    </div>
  );
};

export default ReverseLodge;
