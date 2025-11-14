// src/context/UserContext.js

import { createContext, useContext } from "react";

export const UserContext = createContext(null);

export const UserProvider = ({ children }) => {
  // Example: dynamic roles from SSO / API
  const user = { roles: ["reader"] };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => useContext(UserContext);