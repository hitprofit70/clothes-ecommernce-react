import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Home from './pages/Home';
import Presale from './pages/Presale';
import Men from './pages/Men';
import Women from './pages/Women';
import Myaccount from './pages/Myaccount'
import Productpage from './pages/Productpage'
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
        path: "/cartpage/:id",
        element: <Productpage />,
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
