import { useEffect } from "react";
import "./App.css";
import Home from "./Home/Home";

function App() {
  useEffect(() => {
    let lastScrollTop = 0;

    const handleScroll = () => {
      const scrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const isScrollingDown = scrollTop > lastScrollTop;

      if (isScrollingDown) {
        window.Telegram.WebApp.MainInstance.backButtonInvoked = false;
        alert("welcome");
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

  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
