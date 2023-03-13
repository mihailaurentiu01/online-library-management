import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";

import "devextreme/dist/css/dx.light.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
