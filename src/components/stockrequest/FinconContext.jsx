import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

const FinconContext = createContext();

export const FinconContextProvider = ({ children }) => {
  const history = useHistory();

  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("");
  const [invoiceServices, setInvoiceServices] = useState([]);

  const [selectedDate, setSelectedDate] = useState(
    new Date("2020-08-18T21:11:54")
  );

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
  };
  return (
    <FinconContext.Provider value={state}>{children}</FinconContext.Provider>
  );
};

export default FinconContext;
