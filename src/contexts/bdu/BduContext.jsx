import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";
import { pdfjs } from "react-pdf";

const BduContext = createContext();

export const BduContextProvider = ({ children }) => {
   const history = useHistory();

   const [open, setOpen] = useState(false);
   const [invoiceServices, setInvoiceServices] = useState([]);
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

   const handleDateChange = (newDateValue) => {
      setSelectedDate(newDateValue);
   };

   const removeInvoiceServices = (e) => {
      const targetElement = e;
      const newInvoiceServices = [...invoiceServices];
      const index = newInvoiceServices.indexOf(targetElement);
      newInvoiceServices.splice(index, 1);
      setInvoiceServices(newInvoiceServices);
   };

   const addInvoiceServices = (e, serviceField) => {
      e.preventDefault();
      const newFields = [...invoiceServices, serviceField];
      setInvoiceServices(newFields);
   };

   const handleOpen = () => setOpen(true);

   const handleClose = () => setOpen(false);

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
      addInvoiceServices,
      invoiceServices,
      removeInvoiceServices,
      handleDateChange,
      selectedDate,
      previousPage,
      nextPage,
      url,
      onDocumentLoadSuccess,
      pageNumber,
      handleError,
      modalError,
      handleReportSelectionChange,
      selectedReport,
   };
   return <BduContext.Provider value={state}>{children}</BduContext.Provider>;
};

export default BduContext;
