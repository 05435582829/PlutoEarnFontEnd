import React, { useRef, useEffect, useState, useContext } from "react";
import AnimatedNumber from "react-awesome-animated-number";
import "react-awesome-animated-number/dist/index.css";
import {
  InitializeEarning,
  ClaimReward,
  GetEarningBal,
} from "../../constants/api";
import ClipLoader from "react-spinners/ClipLoader";
import Timer from "./Timer";
import toast, { Toaster } from "react-hot-toast";
import "./TapPage.css";
import Lottie from "lottie-react";
import HourGlass from "../LottieFiles/HourGlassAnimation.json";
import { UserContext } from "../../Utils/UserContext";
import { ReactSVG } from "react-svg";

const TapPage = () => {
  const { pre_data, userBalance, setUserBalance, setLastTime, lastTime } =
    useContext(UserContext);
  const [pointBalance, setPointBalance] = useState(100000);
  const [nextRewardTakeTime, setNextRewardTakeTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [loadingStart, setLoadingStart] = useState(false);

  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.3); // Adjust the speed as needed
    }
  }, []);
  const AddToPointBalance = () => {
    const newBalance = parseInt(userBalance) + 1000;
    console.log(userBalance);
    setUserBalance(newBalance);
  };

  const handleHapticFeedback = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred("medium"); // Adjust feedback type as needed
    }
  };
  // localStorage.setItem("startFarming", "true");
  const init_earning = async () => {
    handleHapticFeedback();
    setLoadingStart(true);
    const response = await InitializeEarning();
    console.log(response, "jack");
    if (response.success === true) {
      setLoadingStart(false);
      setLastTime(response?.data?.lastTime);
      localStorage.setItem("farming", "true");
      localStorage.setItem("claimFarming", "false");
      toast.success("You have started farming");
      return;
    }
    setLoadingStart(false);
    toast.error(response.data.errorMessage);
  };
  const claim_earning = async () => {
    handleHapticFeedback();
    setLoading(true);
    const response = await ClaimReward();
    if (response.success === true) {
      setLoading(false);
      setLastTime(null);
      localStorage.setItem("claimFarming", "false");
      localStorage.setItem("farming", "false");
      toast.success("You have successfully claimed 1,000 pluto tokens");
      AddToPointBalance();
      return;
    }
    setLoading(false);
    toast.error(response.data.errorMessage);
  };

  const local_storage_farming = localStorage.getItem("farming");
  const local_storage_claim_farm = localStorage.getItem("claimFarming");

  useEffect(() => {
    console.log(lastTime);
    if (lastTime !== null) {
      console.log("i'm not null");
      if (new Date(lastTime) <= new Date()) {
        localStorage.setItem("claimFarming", "true");
        localStorage.setItem("farming", "false");
        return;
      }
      if (new Date(lastTime) > new Date()) {
        localStorage.setItem("claimFarming", "false");
        localStorage.setItem("farming", "true");
        return;
      }
      return;
    }
    if (lastTime === null) {
      console.log("i'm  null");

      localStorage.setItem("claimFarming", "false");
      localStorage.setItem("farming", "false");
      return;
    }
  }, [lastTime, new Date(), lastTime]);

  console.log(local_storage_claim_farm);
  console.log(new Date(lastTime), new Date(), new Date(null), lastTime);

  return (
    <div className="TapPageDiv_div">
      <div className="TapPageDiv_area_1">
        <div className="TapPageDiv_area_1_profile">
          <img
            src="/img/pluto_icon.svg"
            alt=""
            className="TapPageDiv_area_1_profile_icon"
          />
        </div>
        <div className="TapPageDiv_area_1_profile_name">
          {pre_data?.user?.username || "N/A"}
          {/*  */}

          {/* hello */}
        </div>

        <div
          className="TapPageDiv_area_1_profileAmountClaimes"
          // onClick={TestToast}
          // onClick={AddToPointBalance}
        >
          <span className="TapPageDiv_area_1_profileAmountClaimes_span">
            <img
              src="/img/point_gif_coin.gif"
              alt=""
              className="event_sideBar_div_area_last_div_cont1_title_gif"
            />{" "}
            <AnimatedNumber
              value={parseFloat(userBalance).toFixed(2)}
              hasComma={true}
              size={32}
              duration={500}
            />
          </span>
          <span className="TapPageDiv_area_1_profileAmountClaimes_Span_txt">
            Pluto Token
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
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* <div>
        <img src="/dummy_glass.svg" alt="" />
        <ReactSVG src="/hourGlassAnimation.svg" />
      </div> */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <div className="TapPageDiv_area_3">
        {local_storage_farming === "true" ? (
          <button className="TapPageDiv_area_3_btn2">
            <span className="TapPageDiv_area_3_btn2_span">
              Farming
              <img
                src="/img/point_gif_coin.gif"
                alt=""
                className="TapPageDiv_area_3_btn_gif"
              />
            </span>
            <Timer deadline={lastTime} />
          </button>
        ) : local_storage_claim_farm === "true" ? (
          <button
            className="TapPageDiv_area_3_btn"
            onClick={claim_earning}
            disabled={loading}
          >
            {loading ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                Claiming...
                <span style={{ marginLeft: "10px" }}>
                  <ClipLoader color="#fff" size={20} />
                </span>
              </div>
            ) : (
              <>
                {" "}
                Claim{" "}
                <div
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  <img
                    src="/img/point_gif_coin.gif"
                    alt=""
                    className="TapPageDiv_area_3_btn_gif"
                  />
                  1,000
                </div>
              </>
            )}
          </button>
        ) : (
          <button
            className="TapPageDiv_area_3_btn"
            onClick={init_earning}
            disabled={loadingStart}
          >
            {loadingStart ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                Starting...
                <span style={{ marginLeft: "10px" }}>
                  <ClipLoader color="#fff" size={20} />
                </span>
              </div>
            ) : (
              <>
                Start{" "}
                <img
                  src="/img/point_gif_coin.gif"
                  alt=""
                  className="TapPageDiv_area_3_btn_gif"
                />
              </>
            )}
          </button>
        )}
      </div>
      <Toaster />
    </div>
  );
};

export default TapPage;
