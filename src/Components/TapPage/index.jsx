import React from "react";
import "./TapPage.css";
import Lottie from "lottie-react";
import HourGlass from "../LottieFiles/HourGlassAnimation.json";
const TapPage = () => {
  return (
    <div className="TapPageDiv_div">
      <div className="TapPageDiv_area_1">
        <div className="TapPageDiv_area_1_profile">
          <img
            src="/img/user_img_icon.png"
            alt=""
            className="TapPageDiv_area_1_profile_icon"
          />
        </div>
        <div className="TapPageDiv_area_1_profile_name">CyntaxJs</div>
        <div className="TapPageDiv_area_1_profileAmountClaimes">
          <img
            src="/img/point_gif_coin.gif"
            alt=""
            className="event_sideBar_div_area_last_div_cont1_title_gif"
          />{" "}
          200,000{" "}
          <span className="TapPageDiv_area_1_profileAmountClaimes_span">
            xp
          </span>
        </div>
      </div>{" "}
      <div className="TapPageDiv_area_2">
        <Lottie
          animationData={HourGlass}
          loop={true}
          autoPlay={true}
          className="TapPageDiv_animation"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <div className="TapPageDiv_area_3">
        <button className="TapPageDiv_area_3_btn">
          Claim{" "}
          <span className="TapPageDiv_area_3_btn_Span">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="TapPageDiv_area_3_btn_gif"
            />
            10,000 <span className="TapPageDiv_area_3_btn_Span_span">xp</span>
          </span>
        </button>
      </div>
    </div>
  );
};

export default TapPage;
