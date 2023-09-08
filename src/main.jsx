import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import ScoreContextProvider from "./contexts/ScoreContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScoreContextProvider>
      <App />
    </ScoreContextProvider>
  </React.StrictMode>,
);
