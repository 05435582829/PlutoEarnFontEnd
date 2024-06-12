import React from "react";
import "./NavigationBar.css";
import { Home06Icon } from "hugeicons-react";
import { Wallet03Icon } from "hugeicons-react";
import { UserMultiple02Icon } from "hugeicons-react";
import { Note01Icon } from "hugeicons-react";

const NavigationBar = ({ activeTab, ToggleActiveTab }) => {
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
      >
        <Home06Icon
          size={32}
          className="NavigationBarDiv_cont1_icon first_icon"
        />
        Home
      </div>
      <div className="NavigationBarDiv_cont1">
        <Note01Icon
          size={32}
          className="NavigationBarDiv_cont1_icon second_icon"
        />
        Tasks
      </div>
      <div className="NavigationBarDiv_cont1">
        <UserMultiple02Icon
          size={32}
          className="NavigationBarDiv_cont1_icon third_icon"
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
      >
        <Wallet03Icon
          size={32}
          className="NavigationBarDiv_cont1_icon last_icon"
        />
        Wallet
      </div>
    </div>
  );
};

export default NavigationBar;
