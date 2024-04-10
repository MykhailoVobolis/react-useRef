import React from "react";
import { UserProvider } from "./userContext";
import ReactDOM from "react-dom/client";
// Імпорт стилів нормалізації
import "modern-normalize";
import App from "./components/App/App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
);
