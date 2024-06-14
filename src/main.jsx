import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Utils/UserContext.jsx";

window.Telegram.WebApp.expand();
window.Telegram.WebApp.BackButton.setCallback(async () => {});

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
