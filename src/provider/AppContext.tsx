"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

interface AppContextProps {
  currentWS: string;
  setCurrentWS: Function;
}

export const AppContext = createContext<AppContextProps | any>("");

const AppProvider = ({ children }: { children: ReactNode }) => {
  let wsName = "";

  useEffect(() => {
    wsName;
  }, [wsName]);

  console.log(wsName);

  const appInfo = { wsName };
  return <AppContext.Provider value={appInfo}>{children}</AppContext.Provider>;
};

export default AppProvider;
