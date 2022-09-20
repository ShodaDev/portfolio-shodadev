import { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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

const rootElement = document.getElementById("root");

ReactDOM.createRoot(rootElement).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
