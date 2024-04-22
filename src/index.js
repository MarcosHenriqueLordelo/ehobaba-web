import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import AppProvider from "./AppProvider";
import { ThemeProvider } from "styled-components";
import dark from "./themes/dark";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <AppProvider>
      <ThemeProvider theme={dark}>
        <App />
      </ThemeProvider>
    </AppProvider>
  </React.StrictMode>
);
