import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { UserProvider } from "./Utils/UserContext.jsx";

const isRunningInTelegram = () => {
  return (
    window.Telegram &&
    window.Telegram.WebApp &&
    window.Telegram.WebApp.initDataUnsafe
  );
};

window.Telegram.WebApp.expand();

const NotInTelegramMessage = () => (
  <div style={{ textAlign: "center", marginTop: "20%" }}>
    <h1>This app can only be used within Telegram.</h1>
  </div>
);

const Root = () => {
  const [isInTelegram, setIsInTelegram] = useState(null);

  useEffect(() => {
    if (isRunningInTelegram()) {
      window.Telegram.WebApp.expand();
      setIsInTelegram(true);
    } else {
      setIsInTelegram(false);
    }
  }, []);

  if (isInTelegram === null) {
    return null; // Optionally, render a loading state while checking
  }

  return (
    <UserProvider>
      {isInTelegram ? <App /> : <NotInTelegramMessage />}
    </UserProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<Root />);
