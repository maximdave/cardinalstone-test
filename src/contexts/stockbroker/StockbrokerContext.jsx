import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { pdfjs } from "react-pdf";

const SecretaryContext = createContext();

export const SecretaryContextProvider = ({ children }) => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedReport, setSelectedReport] = useState("");
  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-18T21:11:54")
  );
  const [numPages, setNumPages] = useState(null);
  const [modalError, setModalError] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);
  const url =
    "https://ocs.fas.harvard.edu/files/ocs/files/undergrad_resumes_and_cover_letters.pdf?m=1598037165";

  pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

  const handleDateChange = (newDateValue) => {
    setSelectedDate(newDateValue);
  };

  const onDocumentLoadSuccess = ({ numPage }) => {
    setNumPages(numPage);
    setPageNumber(1);
  };

  const changePage = (offset) => {
    setPageNumber((prevPageNumber) => prevPageNumber + offset);
  };

  const previousPage = () => {
    changePage(-1);
  };

  const nextPage = () => {
    changePage(1);
  };

  const handleError = (err) => {
    if (err) {
      setModalError(true);
      setOpen(false);
    } else {
      setModalError(false);
      setOpen(true);
    }
  };

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    setModalError(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  };
  const goToUserLogin = () => {
    history.push(`/loginuser`);
  };

  const handleChangedPassword = () => {
    history.push(`/passwordchanged`);
  };

  const handleSelectionChange = (e) => {
    const {
      target: { value },
    } = e;
    setSelectedItem(typeof value === "string" ? value.split(",") : value);
  };

  const handleReportSelectionChange = (e) => {
    const {
      target: { value },
    } = e;
    setSelectedReport(typeof value === "string" ? value.split(",") : value);
  };

  const state = {
    selectedItem,
    handleSelectionChange,
    goToUserLogin,
    handleChangedPassword,
    handleOpen,
    open,
    handleClose,
    handleSubmit,
    previousPage,
    nextPage,
    url,
    onDocumentLoadSuccess,
    pageNumber,
    handleError,
    modalError,
    handleReportSelectionChange,
    selectedReport,
    selectedDate,
    handleDateChange,
  };
  return (
    <SecretaryContext.Provider value={state}>
      {children}
    </SecretaryContext.Provider>
  );
};

export default SecretaryContext;
