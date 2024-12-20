import React from "react";
import ReactDOM from "react-dom/client";

import "@fontsource/roboto-mono";
import "./utils/globalCss.css";

import App from "./App";
import AppProvider from "./AppProvider";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <AppProvider>
        <App />
    </AppProvider>
  </React.StrictMode>
);
