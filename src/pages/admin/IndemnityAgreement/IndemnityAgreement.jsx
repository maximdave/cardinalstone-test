import React, { useState } from "react";
import { toast } from "react-toastify";
import FileViewer from "react-file-viewer";
import { useHistory } from "react-router-dom";
import MuiModal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Button from "../../../components/Button/Button";
import Logo from "../../../assets/CSRL Logo 1.png";
import IndemnityLogo from "../../../assets/indemnity.svg";
import "./IndemnityAgreement.css";

const IndemnityAgreement = () => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleClick = (e) => {
    e.preventDefault();
    toast.success("Kindly Sign In With your New Password");
    history.push("/user-login");
  };
  const type = "pdf";
  const clauseLink =
    "http://localhost:5000/uploads/requestForms/Consolidation-Amalgamation-Request-Form.pdf";

  return (
    <div className="indemnity-agreement-page">
      <div className="indemnity-agreement-card">
        <div className="indemnity-agreement-success">
          <MuiModal
            open={open}
            onClose={handleClose}
            aria-labelledby="View-document-title"
            aria-describedby="view document-description"
          >
            <Box>
              <FileViewer
                style={{ marginLeft: "4000px" }}
                className="view_document_image"
                fileType={type}
                filePath={clauseLink}
              />
              <div className="view_document_button">
                <button className="primary-btn" onClick={handleClose}>
                  CLOSE
                </button>
              </div>
            </Box>
          </MuiModal>
          <img src={Logo} alt="CSP" />
          <h5>STOCKBROKERS' PORTAL</h5>
          <div onClick={handleOpen}>
            <img
              style={{ cursor: "pointer" }}
              src={IndemnityLogo}
              alt="CSP"
              className="indemnity-agreement"
            />
          </div>

          <p>
            <span>
              <input type="radio" />
            </span>
            I have read, and accepted the indemnity clause agreement terms
          </p>
          <Button text="CONTINUE" className="btn13" onClick={handleClick} />
        </div>
      </div>
    </div>
  );
};

export default IndemnityAgreement;
