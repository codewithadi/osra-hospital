import React from "react";
import ReactDOM from "react-dom";
import "./i18n/config";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import Maintenance from "./pages/Maintenance";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>{<App />}</BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
