import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { ReactDnd } from "./ReactDnd";

import "./styles/Navbar.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ReactDnd />
    </BrowserRouter>
  </React.StrictMode>
);
