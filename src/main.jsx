import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

//import components
import App from "./components/app/App.jsx";
import ContactPage from "./pages/pagesContact/ContactPage.jsx";
import InfoPage from "./pages/pagesInfo/InfoPage.jsx";
import ProjectsPage from "./pages/pagesProjects/ProjectsPage.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

//import store
import { ContextProvider } from "./store/Context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/contact",
    element: <ContactPage />,
  },
  {
    path: "/info",
    element: <InfoPage />,
  },
  {
    path: "/projects",
    element: <ProjectsPage />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ContextProvider>
      <RouterProvider router={router} />
    </ContextProvider>
  </StrictMode>
);
