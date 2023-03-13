import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Presale from "./pages/Presale";
import Men from "./pages/Men";
import Women from "./pages/Women";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Productview from "./pages/Productview";
import CartBag from "./pages/CartBag";
import Checkpage from "./pages/Checkpage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppState from "./context/AppState";

const router = createBrowserRouter([
  {
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/presale",
        element: <Presale />,
      },
      {
        path: "/men",
        element: <Men />,
      },
      {
        path: "/women",
        element: <Women />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/productview/:id",
        element: <Productview />,
      },
      {
        path: "/cartbag",
        element: <CartBag />,
      },
      {
        path: "//checkpage",
        element: <Checkpage />,
      },
    ],
  },
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppState>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AppState>
);
