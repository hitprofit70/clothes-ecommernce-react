import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.css';
import Home from './pages/Home';
import Presale from './pages/Presale';
import Men from './pages/Men';
import Women from './pages/Women';
import Myaccount from './pages/Myaccount'
import Productview from './pages/Productview'
import CartBag from './pages/CartBag';
import {createBrowserRouter,RouterProvider,} from "react-router-dom";

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
        path: "/myaccount",
        element: <Myaccount />,
      },
      {
        path: "/productview",
        element: <Productview />,
      },
      {
        path: "/productview/:id",
        element: <Productview />,
      },
      {
        path: "/cartbag",
        element: <CartBag />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>
);
