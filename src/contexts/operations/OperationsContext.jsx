import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

const OperationsContext = createContext();

export const OperationsContextProvider = ({ children }) => {
   const history = useHistory();

   const [open, setOpen] = useState(false);
   const [selectedItem, setSelectedItem] = useState("");
   const [selectedReport, setSelectedReport] = useState("");
   const [selectedDate, setSelectedDate] = useState(
      new Date("2020-08-18T21:11:54")
   );

   const handleDateChange = (newDateValue) => {
      setSelectedDate(newDateValue);
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
      selectedDate,
      handleDateChange,
      handleReportSelectionChange,
      selectedReport,
   };
   return (
      <OperationsContext.Provider value={state}>
         {children}
      </OperationsContext.Provider>
   );
};

export default OperationsContext;
