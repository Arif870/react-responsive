import React, { createContext } from "react";
import useFirebase from "../Hooks/useFirebase";

export const MyContext = createContext();

export default function AuthProvider({ children }) {
  const allContext = useFirebase();

  return <MyContext.Provider value={allContext}>{children}</MyContext.Provider>;
}
