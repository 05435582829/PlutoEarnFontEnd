import React from "react";
import "./NavigationBar.css";
import { Home06Icon } from "hugeicons-react";
import { Wallet03Icon } from "hugeicons-react";
import { UserMultiple02Icon, Rocket01Icon } from "hugeicons-react";
import { Note01Icon } from "hugeicons-react";
import { Haptics, ImpactStyle } from "@capacitor/haptics";

const NavigationBar = ({ activeTab, ToggleActiveTab }) => {
  const hapticsVibrate = async () => {
    await Haptics.vibrate();
  };

  const handleTouchStart = () => {
    hapticsVibrate(); // Trigger haptic feedback on touch start
  };

  return (
    <div className="NavigationBarDiv">
      <div
        id="home"
        className={
          activeTab === "home"
            ? "NavigationBarDiv_cont1_active "
            : "NavigationBarDiv_cont1 "
        }
        onClick={ToggleActiveTab}
        onTouchStart={handleTouchStart}
      >
        <Home06Icon
          size={24}
          className="NavigationBarDiv_cont1_icon first_icon"
        />
        Home
      </div>
      <div
        id="task"
        className={
          activeTab === "task"
            ? "NavigationBarDiv_cont1_active "
            : "NavigationBarDiv_cont1 "
        }
        onClick={ToggleActiveTab}
        onTouchStart={handleTouchStart}
      >
        <Note01Icon
          size={24}
          className="NavigationBarDiv_cont1_icon second_icon"
        />
        Tasks
      </div>
      <div
        id="boost"
        className={
          activeTab === "boost"
            ? "NavigationBarDiv_cont1_active "
            : "NavigationBarDiv_cont1 "
        }
        onClick={ToggleActiveTab}
        onTouchStart={handleTouchStart}
      >
        <Rocket01Icon
          size={24}
          className="NavigationBarDiv_cont1_icon third_icon"
        />
        Boost
      </div>
      <div
        id="ref"
        className={
          activeTab === "ref"
            ? "NavigationBarDiv_cont1_active "
            : "NavigationBarDiv_cont1 "
        }
        onClick={ToggleActiveTab}
        onTouchStart={handleTouchStart}
      >
        <UserMultiple02Icon
          size={24}
          className="NavigationBarDiv_cont1_icon fourth_icon"
        />
        Friends
      </div>
      <div
        id="wallet"
        className={
          activeTab === "wallet"
            ? "NavigationBarDiv_cont1_active"
            : "NavigationBarDiv_cont1"
        }
        onClick={ToggleActiveTab}
        onTouchStart={handleTouchStart}
      >
        <Wallet03Icon
          size={24}
          className="NavigationBarDiv_cont1_icon last_icon"
        />
        Wallet
      </div>
    </div>
  );
};

export default NavigationBar;
