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
import ReferralPage from "../Components/ReferralPage";
import Boost from "../Components/BoostPage";
import TaskPage from "../Components/TaskPage";
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
          ) : activeTab === "ref" ? (
            <ReferralPage />
          ) : activeTab === "boost" ? (
            <Boost />
          ) : activeTab === "task" ? (
            <TaskPage />
          ) : null}
        </div>
      </div>
      <NavigationBar activeTab={activeTab} ToggleActiveTab={ToggleActiveTab} />
    </div>
  );
};

export default Home;
