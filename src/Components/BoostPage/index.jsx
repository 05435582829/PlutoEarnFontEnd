import React from "react";
import "./Boost.css";
import Lottie from "lottie-react";
import ComingSoon from "../LottieFiles/ComingSoon.json";
const Boost = () => {
  return (
    <div className="Boost_page_div">
      <div className="coming_soon_div">
        <Lottie
          animationData={ComingSoon}
          loop={true}
          autoPlay={true}
          className="coming_soon_div_animation"
          preserveAspectRatio="xMidYMid meet"
        />
        <div className="coming_soon_div_txt">Coming soon</div>
      </div>
    </div>
  );
};

export default Boost;
