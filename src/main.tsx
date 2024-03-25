import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "../src/styles/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import PageError from "./PageError.tsx";
import MyProjects from "./MyProjects.tsx";
import Contact from "./Contact.tsx";

const router = createBrowserRouter([
  {
    path: "/portfolio",
    element: <App />,
    errorElement: <PageError />,
  },
  {
    path: "/portfolio/myprojects",
    element: <MyProjects />,
    errorElement: <PageError />,
    children: [
      {
        path: ":id",
        element: <MyProjects />,
      },
    ],
  },
  {
    path: "/portfolio/contact",
    element: <Contact />,
  },
  {
    path: "*",
    element: <PageError />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
