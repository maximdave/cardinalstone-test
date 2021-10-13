/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from "react";
import "./Requests.css";
import {
  TransferOfSharesForm,
  TransferHeader,
} from "./requestForms/TransferOfSharesForm";
import { DematRequestForm, DematHeader } from "./requestForms/DematRequestForm";
import {
  OtherRelevantRequestForm,
  OtherRelevantRequestHeader,
} from "./requestForms/OtherRelevantRequestForm";
import {
  TransmisionOfSharesForm,
  TransmisionHeader,
} from "./requestForms/TransmisionOfSharesForm";
import {
  OutstandingDividendsForm,
  OutstandingDividendsHeader,
} from "./requestForms/OutstandingDividendsForm";
import {
  ConsolidationOfAccounts,
  ConsolidationOfAccountsHeader,
} from "./requestForms/ConsolidationOfAccounts";
import {
  StatementOfAccount,
  StatementOfAccountHeader,
} from "./requestForms/StatementOfAccount";
import {
  ChangeOfAddressForm,
  ChangeOfAddressHeader,
} from "./requestForms/ChangeOfAddressForm";
import {
  SubmitBankerConfirm,
  SubmitBankerConfirmHeader,
} from "./requestForms/SubmitBankerConfirm";
import {
  SignatureMandateForm,
  SignatureMandateHeader,
} from "./requestForms/SignatureMandateForm";
import {
  ChangeOfNameFormCorporate,
  ChangeOfNameHeaderC,
} from "./requestForms/ChangeOfNameFormCorporate";
import {
  ChangeOfNameFormIndividual,
  ChangeOfNameHeaderI,
} from "./requestForms/ChangeOfNameFormIndividual";
import {
  CorrectionOfNameForm,
  CorrectionOfNameHeader,
} from "./requestForms/CorrectionOfNameForm";

const Requests = () => {
  // const [image1, setImage1] = useState();
  const [form1, setForm1] = useState(<div>{DematRequestForm}</div>);
  const [header, setHeader] = useState(<div>{DematHeader}</div>);

  return (
    <div className="request-card">
      <div className="card-head">
        {header}
        <input type="text" placeholder="Shareholder’s fullname" />
        <input type="text" placeholder="Input Shareholder’s CHN" />
      </div>
      <div className="card-content">
        {form1}
        {/* <div className="line" /> */}
        <div className="right">
          <h3>Other Requests</h3>

          <p
            className="right-text"
            onClick={() => {
              setForm1(DematRequestForm);
              setHeader(DematHeader);
            }}
          >
            Demat Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(TransferOfSharesForm);
              setHeader(TransferHeader);
            }}
          >
            Transfer of Shares Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(CorrectionOfNameForm);
              setHeader(CorrectionOfNameHeader);
            }}
          >
            Correction of Name Request
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(ChangeOfNameFormIndividual);
              setHeader(ChangeOfNameHeaderI);
            }}
          >
            Request For Change Of Name Individual
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(ChangeOfNameFormCorporate);
              setHeader(ChangeOfNameHeaderC);
            }}
          >
            Request For Change Of Name Coporates
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(SignatureMandateForm);
              setHeader(SignatureMandateHeader);
            }}
          >
            Request For Signature Mandate
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(SubmitBankerConfirm);
              setHeader(SubmitBankerConfirmHeader);
            }}
          >
            Submission of Banker's Confirmation Letters
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(ChangeOfAddressForm);
              setHeader(ChangeOfAddressHeader);
            }}
          >
            Request for Change of Address
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(StatementOfAccount);
              setHeader(StatementOfAccountHeader);
            }}
          >
            Request for Statement Of Account
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(ConsolidationOfAccounts);
              setHeader(ConsolidationOfAccountsHeader);
            }}
          >
            Request for Consolidating Accounts
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(TransmisionOfSharesForm);
              setHeader(TransmisionHeader);
            }}
          >
            Request for Transmision Of Shares
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(OutstandingDividendsForm);
              setHeader(OutstandingDividendsHeader);
            }}
          >
            Request for Outstanding Dividends
          </p>
          <p
            className="right-text"
            onClick={() => {
              setForm1(OtherRelevantRequestForm);
              setHeader(OtherRelevantRequestHeader);
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
