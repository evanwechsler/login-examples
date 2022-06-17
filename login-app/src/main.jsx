import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import LoginContext from "./context/LoginContext";
import { BrowserRouter as Router } from "react-router-dom";
import "./styles/globals.scss";

ReactDOM.createRoot(document.getElementById("root")).render(
  <LoginContext>
    <Router>
      <App />
    </Router>
  </LoginContext>
);
