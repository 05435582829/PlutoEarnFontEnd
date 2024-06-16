import { useEffect } from "react";
import "./App.css";
import Home from "./Home/Home";

function App() {
  useEffect(() => {
    const handleScroll = (event) => {
      event.stopPropagation();
      // Add your scroll handling logic here
    };

    // Attach the event listener to the desired element
    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
