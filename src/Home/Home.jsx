import React, { useState, useEffect, useContext } from "react";
// components=========
// components=========
// components=========
import NavigationBar from "./NavigationBar/NavigationBar";
import DefaultComponentLoading from "./ComponentLoader/DefaultComponentLoading";
import { UserContext } from "../Utils/UserContext";

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
import { SignupLogin } from "../constants/api";
const Home = () => {
  const { user, loading, error } = useContext(UserContext);
  const [activeTab, setActiveTab] = useState("home");
  const [loadingDiv, setLoadingDiv] = useState(true);

  const [userData, setUserData] = useState(null);

  useEffect(() => {
    const initTelegramWebApp = async () => {
      if (window.Telegram && window.Telegram.WebApp) {
        try {
          const params = new URLSearchParams(Telegram.WebApp.initData);
          const data = Object.fromEntries(params);
          data.user = JSON.parse(data.user);
          setUserData(data);

          //call the login api
          const res = await SignupLogin({
            userId: data?.user?.username,
            chatId: data?.user?.username,
          });
          console.log(res, "aaa");
        } catch (error) {
          console.error("Error initializing Telegram Web App:", error);
        }
      }
    };

    initTelegramWebApp();
  }, []);

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
