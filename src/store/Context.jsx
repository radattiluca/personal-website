import { createContext, useState } from "react";

export const Context = createContext();

export function ContextProvider({ children }) {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const [openInfo, setOpenInfo] = useState(false);
  const [images, setImages] = useState([]);
  const [slides, setSlides] = useState([]);
  const [openLinksProject, setOpenLinksProject] = useState(false);
  const [dotsShow, setDotsShow] = useState(true);

  return (
    <Context.Provider
      value={{
        extendNavbar,
        setExtendNavbar,
        openInfo,
        setOpenInfo,
        images,
        setImages,
        slides,
        setSlides,
        openLinksProject,
        setOpenLinksProject,
        dotsShow,
        setDotsShow,
      }}
    >
      {children}
    </Context.Provider>
  );
}
