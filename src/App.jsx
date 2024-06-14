import { useState, useEffect } from "react";
import "./App.css";
import Home from "./Home/Home";

function App() {
  const [userInfo, setUserInfo] = useState(null);

  useEffect(() => {
    const initTelegramWebApp = async () => {
      if (window.Telegram && window.Telegram.WebApp) {
        try {
          const userInfo = await window.Telegram.WebApp.getUserInfo();
          setUserInfo(userInfo);
        } catch (error) {
          console.error("Error getting user info:", error);
        }
      }
    };

    initTelegramWebApp();
  }, []);
  return (
    <div className="App">
      {userInfo ? <Home /> : <p> THis is not loaded inside a telegram app</p>}
    </div>
  );
}

export default App;
