import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

window.Telegram.WebApp.expand();
window.Telegram.WebApp.BackButton.setCallback(async () => {
  // This code will be executed when the user tries to close the mini app
});
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
