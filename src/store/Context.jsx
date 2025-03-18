import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [openCV, setOpenCV] = useState(false);
  const [expandedTriangle, setExpandedTriangle] = useState(false);
  const [images, setImages] = useState([]);

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
        images,
        setImages,
      }}
    >
      {children}
    </Context.Provider>
  );
}
