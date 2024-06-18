import React from "react";
import PuffLoader from "react-spinners/PuffLoader";

import HashLoader from "react-spinners/HashLoader";
import BounceLoader from "react-spinners/BounceLoader";
import MoonLoader from "react-spinners/MoonLoader";
import "./defaultCompLoader.css";
const DefaultComponentLoading = () => {
  return (
    <div className="loading_div_area">
      <div className="loading_div_area_cont">
        {/* <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon"
          size={80}
          speedMultiplier={0.5}
        />
        <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={80}
          speedMultiplier={0.5}
        />
        <MoonLoader
          color="#fff"
          aria-label="Loading Spinner"
          data-testid="loader"
          className="loading_div_area_cont_icon2"
          size={80}
          speedMultiplier={0.5}
        /> */}
        <img src="/img/logo.png" alt="" className="loading_div_area_img" />
        <div className="default_loader_txt">Pluto Farm</div>
      </div>

      <div className="powered_by_txt">Powered By Egochain</div>
    </div>
  );
};

export default DefaultComponentLoading;
