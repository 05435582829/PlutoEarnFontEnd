import { useEffect } from "react";
import "./App.css";
import Home from "./Home/Home";

function App() {
  const tg = window.Telegram.WebApp;
  // Hide the back button
  tg.BackButton.hide();

  useEffect(() => {
    const params = new URLSearchParams(window.Telegram.WebApp.initData);
    const userData = Object.fromEntries(params);

    userData.user = JSON.parse(userData.user);
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
