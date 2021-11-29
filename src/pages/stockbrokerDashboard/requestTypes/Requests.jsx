/* eslint-disable no-plusplus */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import axios from "axios";
import { toast } from "react-toastify";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./Requests.css";
import TransferOfSharesForm from "./requestForms/TransferOfSharesForm";
import DematRequestForm from "./requestForms/DematRequestForm";
import OtherRelevantRequestForm from "./requestForms/OtherRelevantRequestForm";
import TransmisionOfSharesForm from "./requestForms/TransmisionOfSharesForm";
import OutstandingDividendsForm from "./requestForms/OutstandingDividendsForm";
import ConsolidationOfAccounts from "./requestForms/ConsolidationOfAccounts";
import StatementOfAccount from "./requestForms/StatementOfAccount";
import ChangeOfAddressForm from "./requestForms/ChangeOfAddressForm";
import SubmitBankerConfirm from "./requestForms/SubmitBankerConfirm";
import SignatureMandateForm from "./requestForms/SignatureMandateForm";
import ChangeOfNameFormCorporate from "./requestForms/ChangeOfNameFormCorporate";
import ChangeOfNameFormIndividual from "./requestForms/ChangeOfNameFormIndividual";
import CorrectionOfNameForm from "./requestForms/CorrectionOfNameForm";
import {
  getAllHolderCertTotal,
  getAllHolderKYC,
  getRandomHolderDetails,
} from "../../../components/coreApllicationAPI";

const Requests = () => {
  const [requestType, setRequestType] = useState("Demat Request");

  const [shName, setshName] = useState("");
  const [shareholderFirstName, setShareholderFirstName] = useState("");

  const [title, setTitle] = useState("");

  const [shareholderCHN, setShareholderCHN] = useState("");
  const [shareholderName, setShareholderName] = useState("");
  const [setError] = useState("");

  const { requestParam } = useParams();

  useEffect(() => {
    switch (requestParam) {
      case "dematRequest":
        setRequestType("Demat Request");
        break;
      case "nameCorrection":
        setRequestType("Correction of Name");
        break;
      case "nameChangeI":
        setRequestType("Change Of Name Individual");
        break;
      case "nameChangeC":
        setRequestType("Change Of Name Coporates");
        break;
      case "accountsConsolidation":
        setRequestType("Request for Consolidating Accounts");
        break;
      case "signatureMandate":
        setRequestType("Request For Signature Mandate");
        break;
      case "bankersConfirm":
        setRequestType("Submission of Banker's Confirmation Letters");
        break;
      case "addressChange":
        setRequestType("Request for Change of Address");
        break;
      case "accountStatement":
        setRequestType("Request for Statement Of Account");
        break;
      case "sharesTransfer":
        setRequestType("Transfer of Shares");
        break;
      case "sharesTransmision":
        setRequestType("Request for Transmision Of Shares");
        break;
      case "otherRequests":
        setRequestType("Other Relevant Requests");
        break;
      default:
        break;
    }
  }, []);

  //
  const handleCreateRequest = async (uploadFiles) => {
    console.log("sarehholder>>>>>>", shName);
    console.log("shareholderCHN>>>>>>", shareholderCHN);
    try {
      const Token = localStorage.getItem("authToken");
      const config = {
        headers: {
          Authorization: `Bearer ${Token}`,
        },
      };
      const formData = new FormData();
      const files = Array.from(uploadFiles);
      for (let i = 0; i < files.length; i++) {
        formData.append("requestFiles", files[i]);
      }
      formData.append("requestType", requestType);
      formData.append("shareholderCHN", shareholderCHN);
      formData.append("shareholderName", shName);
      formData.append("shareholderFirstName", shareholderFirstName);

      console.log("sarehholder>>>>>>", {
        shareholderCHN,
        requestType,
        shareholderFirstName,
        shName,
        files,
      });
      const { data } = await axios.post(
        `http://localhost:5000/sbp/createrequest`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      toast.success("Request Submitted Successfully");
      console.log("data:::::", data);
    } catch (error) {
      toast.error("An Error Occured");
      console.log(error);
    }
  };
  const handleCHNSUbmit = async () => {
    if (
      shareholderCHN[0].toLowerCase() !== "c" &&
      shareholderCHN[0].toLowerCase() !== "r"
    ) {
      return;
    }
    const result = await getRandomHolderDetails(
      shareholderCHN[0].toLowerCase(),
      shareholderCHN
    );
    console.log(result);
    const lastName = result[0].LastName || "";
    setshName(lastName);
    const firstName = result[0].FirstName || "";
    setShareholderFirstName(firstName);
  };

  const handleOtherRequestSUbmit = async (text) => {
    const Token = localStorage.getItem("authToken");
    const config = {
      headers: {
        Authorization: `Bearer ${Token}`,
      },
    };
    const payload = {
      requestType,
      shareholderCHN,
      shareholderName,
      shareholderFirstName,
    };
    try {
      const { data } = await axios.post(
        `http://localhost:5000/sbp/createrequest`,
        payload,
        {
          headers: {
            Authorization: `Bearer ${Token}`,
          },
        }
      );
      toast.success("Request Submitted Successfully");
      console.log("data:::::", data);
    } catch (error) {
      toast.success("An Error Occured");
      console.log(error);
    }
  };

  console.log("shareholderCHN::::::>>>>", shareholderCHN);
  console.log("shName::::::>>>>", shName);
  return (
    <div className="request-card">
      <div className="card-content">
        {requestType === "Demat Request" && (
          <DematRequestForm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Transfer of Shares" && (
          <TransferOfSharesForm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Correction of Name" && (
          <CorrectionOfNameForm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Change Of Name Individual" && (
          <ChangeOfNameFormIndividual
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Change Of Name Coporates" && (
          <ChangeOfNameFormCorporate
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Request For Signature Mandate" && (
          <SignatureMandateForm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Submission of Banker's Confirmation Letters" && (
          <SubmitBankerConfirm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Request for Change of Address" && (
          <ChangeOfAddressForm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Request for Statement Of Account" && (
          <StatementOfAccount
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Request for Consolidating Accounts" && (
          <ConsolidationOfAccounts
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Request for Transmision Of Shares" && (
          <TransmisionOfSharesForm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Request for Outstanding Dividends" && (
          <OutstandingDividendsForm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleCreateRequest={handleCreateRequest}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}
        {requestType === "Other Relevant Requests" && (
          <OtherRelevantRequestForm
            handleCHNSUbmit={handleCHNSUbmit}
            shareholderName={shName}
            shareholderFirstName={shareholderFirstName}
            handleOtherRequestSUbmit={handleOtherRequestSUbmit}
            setShareholderCHN={setShareholderCHN}
            shareholderCHN={shareholderCHN}
          />
        )}

        {/* <div className="line" /> */}
        <div className="right" style={{ width: "20%", marginTop: "1rem" }}>
          <h3>Other Requests</h3>

          <p
            className="right-text"
            onClick={() => {
              setRequestType("Demat Request");
            }}
          >
            Demat Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Transfer of Shares");
            }}
          >
            Transfer of Shares Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Correction of Name");
            }}
          >
            Correction of Name Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Change Of Name Individual");
            }}
          >
            Request For Change Of Name Individual
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Change Of Name Coporates");
            }}
          >
            Request For Change Of Name Coporates
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Request For Signature Mandate");
            }}
          >
            Request For Signature Mandate
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Submission of Banker's Confirmation Letters");
            }}
          >
            Submission of Banker's Confirmation Letters
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Request for Change of Address");
            }}
          >
            Request for Change of Address
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Request for Statement Of Account");
            }}
          >
            Request for Statement Of Account
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Request for Consolidating Accounts");
            }}
          >
            Request for Consolidating Accounts
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Request for Transmision Of Shares");
            }}
          >
            Request for Transmision Of Shares
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Request for Outstanding Dividends");
            }}
          >
            Request for Outstanding Dividends
          </p>
          <p
            className="right-text"
            onClick={() => {
              setRequestType("Other Relevant Requests");
            }}
          >
            Other Relevant Requests
          </p>
        </div>
      </div>
    </div>
  );
};

export default Requests;
