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
import { SignupLogin, GetEarningBal } from "../constants/api";
const Home = () => {
  const {
    setUser,
    setLoading,
    setError,
    user,
    error,
    loading,
    pre_data,
    setPredata,
  } = useContext(UserContext);

  const [activeTab, setActiveTab] = useState("home");
  const [loadingDiv, setLoadingDiv] = useState(true);
  const initTelegramWebApp = async () => {
    if (window.Telegram && window.Telegram.WebApp) {
      try {
        const tg = Telegram.WebApp;
        // Click Event
        const goBack = () => {
          // Callback code
          console.log("Do you want to close???");
        };

        tg.BackButton.onClick(goBack);
        const params = new URLSearchParams(Telegram.WebApp.initData);
        const data = Object.fromEntries(params);
        data.user = JSON.parse(data.user);
        setPredata(data);

        //call the login api
        const res = await SignupLogin(data.user.username, data.user.id);
        console.log(res, "aaa");

        if (res.success) {
          setUser(res?.data?.user);
          localStorage.setItem("eta", res?.data?.token);
          setLoadingDiv(false);
          return;
        }
      } catch (error) {
        console.error("Error initializing Telegram Web App:", error);
      }
    } else {
      console.log("area");
    }
  };

  useEffect(() => {
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
  console.log(user, pre_data);
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
