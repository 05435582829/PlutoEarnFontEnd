import React, { useState } from "react";
// components=========
// components=========
// components=========
import NavigationBar from "./NavigationBar/NavigationBar";
// pages=========
// pages=========
// pages=========
import TapPage from "../Components/TapPage";
import WalletPage from "../Components/WalletPage";
// styles=========
// styles=========
// styles=========
import "./Home.css";
const Home = () => {
  const [activeTab, setActiveTab] = useState("home");
  const ToggleActiveTab = (e) => {
    setActiveTab(e.currentTarget.id);
  };
  return (
    <div className="Home">
      <div className="Home_body">
        <div className="Home_container">
          {activeTab === "home" ? (
            <TapPage />
          ) : activeTab === "wallet" ? (
            <WalletPage />
          ) : null}
        </div>
      </div>
      <NavigationBar activeTab={activeTab} ToggleActiveTab={ToggleActiveTab} />
    </div>
  );
};

export default Home;
