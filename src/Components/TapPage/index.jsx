import React, { useRef, useEffect, useState, useContext } from "react";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import { InitializeEarning } from "../../constants/api";

import "./TapPage.css";
import Lottie from "lottie-react";
import HourGlass from "../LottieFiles/HourGlassAnimation.json";
import { UserContext } from "../../Utils/UserContext";
const TapPage = () => {
  const [pointBalance, setPointBalance] = useState(100000);

  const { pre_data, setPredata } = useContext(UserContext);
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.3); // Adjust the speed as needed
    }
  }, []);
  const AddToPointBalance = () => {
    setPointBalance(pointBalance + 1000);
  };

  const init_earning = async () => {
    const response = await InitializeEarning();

    console.log(response, "jack");
  };
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
        <div className="TapPageDiv_area_1_profile_name">
          {pre_data?.user?.username || "N/A"}
          {/*  */}
        </div>

        <div className="TapPageDiv_area_1_profileAmountClaimes">
          <img
            src="/img/point_gif_coin.gif"
            alt=""
            className="event_sideBar_div_area_last_div_cont1_title_gif"
          />{" "}
          <AnimatedNumber
            value={pointBalance}
            hasComma={true}
            size={32}
            duration={500}
          />
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
          lottieRef={lottieRef}
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <div className="TapPageDiv_area_3">
        <button className="TapPageDiv_area_3_btn" onClick={init_earning}>
          Start{" "}
          {/* <span className="TapPageDiv_area_3_btn_Span">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="TapPageDiv_area_3_btn_gif"
            />
            10,000 <span className="TapPageDiv_area_3_btn_Span_span">xp</span> */}
          {/* </span> */}
        </button>
      </div>
    </div>
  );
};

export default TapPage;
