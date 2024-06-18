import { useEffect, useState } from "react";
import "./App.css";
import Home from "./Home/Home";

function App() {
  const [allowed, setAllowed] = useState(true);
  useEffect(() => {
    // Check if the app is running inside the Telegram WebView
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isTelegramWebView = /Telegram/.test(userAgent);

    if (!isTelegramWebView) {
      // If the app is not running inside the Telegram WebView, display a message or redirect the user
      alert("This app can only be accessed within the Telegram app.");
      window.location.href = "https://telegram.org/dl";
      // Redirect to Telegram download page
      setAllowed(false);
      return;
    }
  }, []);

  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > lastScrollTop;

      if (isScrollingDown) {
        window.Telegram.WebApp.MainInstance.backButtonInvoked = false;
      }
      lastScrollTop = scrollTop;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  useEffect(() => {
    // Initialize the Telegram Web App SDK
    if (window.Telegram) {
      window.Telegram.WebApp.ready();
    }
  }, []);

  const setHeaderColor = (color) => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.setHeaderColor(color);
    }
  };
  useEffect(() => {
    setHeaderColor("#fff");
  }, []);

  if (!allowed) {
    return (
      <div>
        <p>This browser don't posses the feature to run this application</p>
      </div>
    );
  }
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
