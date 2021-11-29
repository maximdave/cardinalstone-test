import { useState } from "react";
import { useHistory } from "react-router-dom";
import Card from "../../../components/Card/Card";
import styles from "./StockRequestStart.module.css";

const RequestStart = () => {
  const [request, setRequest] = useState("");

  const history = useHistory();

  const handleChange = (e) => {
    const selectedOption = e.target.value;
    setRequest(() => selectedOption);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    switch (request) {
      case "Demat request":
        history.push("/stockbrokerdashboard/inrequests/dematRequest");
        break;
      case "Correction of Name":
        history.push("/stockbrokerdashboard/inrequests/nameCorrection");
        break;
      case "Change of Name for Individuals":
        history.push("/stockbrokerdashboard/inrequests/nameChangeI");
        break;
      case "Change of Name for Corporates":
        history.push("/stockbrokerdashboard/inrequests/nameChangeC");
        break;
      case "Consolidation of Accounts":
        history.push("/stockbrokerdashboard/inrequests/accountsConsolidation");
        break;
      case "Signature Mandate":
        history.push("/stockbrokerdashboard/inrequests/signatureMandate");
        break;
      case "Submission of Bankers’ Confirmation Letters":
        history.push("/stockbrokerdashboard/inrequests/bankersConfirm");
        break;
      case "Change of Address":
        history.push("/stockbrokerdashboard/inrequests/addressChange");
        break;
      case "Request for Transmision Of Shares":
        history.push("/stockbrokerdashboard/inrequests/sharesTransmision");
        break;
      case "Transfer of Shares":
        history.push("/stockbrokerdashboard/inrequests/sharesTransfer");
        break;
      case "Statement of Account":
        history.push("/stockbrokerdashboard/inrequests/accountStatement");
        break;
      case "Other Relevant Requests":
        history.push("/stockbrokerdashboard/inrequests/otherRequests");
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.requestStart}>
      <p>Recent Request</p>
      <div className={styles.requestHistory}>
        <Card text="Demat Request" />
        {/* <Card text="Demat Request" />
        <Card text="Demat Request" /> */}
        {/* <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" />
        <Card text="Demat Request" /> */}
      </div>
      <div className={styles.requestContent}>
        <div>
          <p>Make a New Request</p>
          <div className={styles.requestFilter}>
            <form onSubmit={handleSubmit} className={styles.filterForm}>
              <select
                value={request}
                onChange={handleChange}
                className={`form-control ${styles.selectRequest}`}
              >
                <option value="" disabled>
                  Select Request...
                </option>
                <option value="Demat request">Demat request</option>
                <option value="Correction of Name">Correction of Name</option>
                <option value="Change of Name for Individuals">
                  Change of Name for Individuals
                </option>
                <option value="Change of Name for Corporates">
                  Change of Name for Corporates
                </option>
                <option value="Consolidation of Accounts">
                  Consolidation of Accounts
                </option>
                <option value="Signature Mandate">Signature Mandate</option>
                <option value="Submission of Bankers’ Confirmation Letters">
                  Submission of Bankers’ Confirmation Letters
                </option>
                <option value="Change of Address">Change of Address</option>
                <option value="Statement of Account">
                  Statement of Account
                </option>
                <option value="Transfer of Shares">Transfer of Shares</option>
                <option value="Request for Transmision Of Shares">
                  Request for Transmision Of Shares
                </option>
                <option value="Other Relevant Requests">
                  Other Relevant Requests
                </option>
              </select>
              <button type="submit" className={styles.button}>
                proceed
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RequestStart;
