import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
  Route,
} from "react-router-dom";

import App from './routes/App';
import Imprint from './routes/Imprint';
import Privacy_Policy from './routes/Privacy-Policy';

import './index.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/imprint",
    element: <Imprint />,
  },
  {
    path: "/privacy-policy",
    element: <Privacy_Policy />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
