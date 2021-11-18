import React, { createContext, useState } from "react";
import { useHistory } from "react-router-dom";

const UserCreationContext = createContext();
export const UserCreationContextProvider = ({ children }) => {
  const history = useHistory();

  const [userToCreate, setUserToCreate] = useState("");
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUserToCreate = (user) => {
    setUserToCreate(user);
  };
  const handleCreateUser = () => {
    history.push(`/successfuluser`);
  };

  const goToDashboard = () => {
    history.push(`/admindashboard`);
  };
  const createAnotherUser = () => {
    setUserToCreate("user");
    history.push(`/create`);
  };

  const handleSelectionChange = (e) => {
    const {
      target: { value },
    } = e;
    setSelectedItem(typeof value === "string" ? value.split(",") : value);
  };
  const state = {
    handleUserToCreate,
    handleCreateUser,
    userToCreate,
    open,
    handleOpen,
    handleClose,
    handleSelectionChange,
    selectedItem,
    goToDashboard,
    createAnotherUser,
  };
  return (
    <UserCreationContext.Provider value={state}>
      {children}
    </UserCreationContext.Provider>
  );
};

export default UserCreationContext;
