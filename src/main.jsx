import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import Context from "./contextComponent/Context.jsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "./contextComponent/ThemeContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <ThemeProvider>
        <Context>
          <App />
        </Context>
      </ThemeProvider>
    </BrowserRouter>
  </React.StrictMode>
);
