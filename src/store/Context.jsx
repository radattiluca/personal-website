import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openCV, setOpenCV] = useState(false);
  const [expandedTriangle, setExpandedTriangle] = useState(false);

  return (
    <Context.Provider
      value={{
        extendNavbar,
        setExtendNavbar,
        openInfo,
        setOpenInfo,
        openCV,
        setOpenCV,
        expandedTriangle,
        setExpandedTriangle,
      }}
    >
      {children}
    </Context.Provider>
  );
}
