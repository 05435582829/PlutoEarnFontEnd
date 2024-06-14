import React, { useState, useEffect } from "react";
// components=========
// components=========
// components=========
import NavigationBar from "./NavigationBar/NavigationBar";
import DefaultComponentLoading from "./ComponentLoader/DefaultComponentLoading";
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
  const [loadingDiv, setLoadingDiv] = useState(true);

  const ToggleActiveTab = (e) => {
    setActiveTab(e.currentTarget.id);
  };
  useEffect(() => {
    setLoadingDiv(true);
    const timer = setTimeout(() => {
      setLoadingDiv(false);
    }, 5000);
  }, []);

  return (
    <>
      {loadingDiv ? (
        <DefaultComponentLoading />
      ) : (
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
          <NavigationBar
            activeTab={activeTab}
            ToggleActiveTab={ToggleActiveTab}
          />
          {/* <img src="/img/pluto_bg.jpg" alt="" className="Home_bg" /> */}
        </div>
      )}
    </>
  );
};

export default Home;
