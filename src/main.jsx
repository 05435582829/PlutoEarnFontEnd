import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Utils/UserContext.jsx";

//make telegram webapp view show site fullscreen
window.Telegram.WebApp.expand();
// window.Telegram.WebApp.BackButton.setCallback(async () => {});

ReactDOM.createRoot(document.getElementById("root")).render(
  <UserProvider>
    <App />
  </UserProvider>
);
