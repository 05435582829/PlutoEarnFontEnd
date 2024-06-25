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
import Check from "./check.js";
import Swam from "./swamAnimation.js";
import Running from "./runningGlass.js";

const TapPage = () => {
  const {
    pre_data,
    userBalance,
    setUserBalance,
    setLastTime,
    lastTime,
    claimFarming,
    farming,
    setClaimFarming,
    setFarming,
  } = useContext(UserContext);
  const [pointBalance, setPointBalance] = useState(100000);
  const [nextRewardTakeTime, setNextRewardTakeTime] = useState(new Date());
  const [loading, setLoading] = useState(false);
  const [loadingStart, setLoadingStart] = useState(false);
  const [animationLoading, setAnimationLoading] = useState(false);
  const hasConditionMet = useRef(false);
  const lottieRef = useRef();

  useEffect(() => {
    if (lottieRef.current) {
      lottieRef.current.setSpeed(0.3); // Adjust the speed as needed
    }
  }, []);
  const AddToPointBalance = () => {
    const newBalance = parseInt(userBalance) + 2000;
    console.log(userBalance);
    setUserBalance(newBalance);
  };

  const handleHapticFeedback = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred("medium"); // Adjust feedback type as needed
    }
  };

  const init_earning = async () => {
    handleHapticFeedback();
    setLoadingStart(true);
    const response = await InitializeEarning();
    console.log(response, "jack");
    setAnimationLoading(true);
    if (response.success === true) {
      const timer = setTimeout(() => {
        setLastTime(response?.data?.lastTime);
        setLoadingStart(false);
        setAnimationLoading(false);
        setFarming(true);
        toast.success("You have started farming", {
          style: { fontSize: "12px" },
        });
      }, 2800);

      return;
    }

    const timer2 = setTimeout(() => {
      setLoadingStart(false);
      setAnimationLoading(false);
      setFarming(false);
      toast.error(response.data.errorMessage, {
        style: { fontSize: "12px" },
      });
    }, 2800);
  };
  const claim_earning = async () => {
    handleHapticFeedback();
    setLoading(true);
    const response = await ClaimReward();
    if (response.success === true) {
      setLoading(false);
      setLastTime(null);
      setFarming(false);
      setClaimFarming(false);
      toast.success("You have successfully claimed 2,000 pluto tokens", {
        style: { fontSize: "12px" },
      });
      AddToPointBalance();
      return;
    }
    setLoading(false);
    toast.error(response.data.errorMessage, {
      style: { fontSize: "12px" },
    });
  };

  // const local_storage_farming = localStorage.getItem("farming");
  // const local_storage_claim_farm = localStorage.getItem("claimFarming");

  // useEffect(() => {
  //   console.log(lastTime);
  //   if (lastTime !== null) {
  //     console.log("i'm not null");
  //     if (new Date(lastTime) <= new Date()) {
  //       localStorage.setItem("claimFarming", "true");
  //       localStorage.setItem("farming", "false");
  //       return;
  //     }
  //     if (new Date(lastTime) > new Date()) {
  //       localStorage.setItem("claimFarming", "false");
  //       localStorage.setItem("farming", "true");
  //       return;
  //     }
  //     return;
  //   }
  //   if (lastTime === null) {
  //     console.log("i'm  null");

  //     localStorage.setItem("claimFarming", "false");
  //     localStorage.setItem("farming", "false");
  //     return;
  //   }
  // }, [lastTime, new Date()]);

  // console.log(local_storage_claim_farm);
  // console.log(new Date(lastTime), new Date(), new Date(null), lastTime);

  useEffect(() => {
    if (lastTime !== null) {
      const checkCondition = () => {
        const currentTime = new Date();
        const targetTime = new Date(lastTime);
        if (targetTime <= currentTime && !hasConditionMet.current) {
          setClaimFarming(true);
          setFarming(false);
          hasConditionMet.current = true;
        } else if (targetTime > currentTime) {
          setClaimFarming(false);
          setFarming(true);
        }
      };

      // Initial check
      checkCondition();

      // Set an interval to check periodically
      const intervalId = setInterval(checkCondition, 1000); // Check every second

      // Cleanup the interval on unmount
      return () => clearInterval(intervalId);
    } else {
      setClaimFarming(false);
      setFarming(false);
    }
  }, [lastTime]);

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
              value={parseInt(userBalance)}
              hasComma={true}
              size={32}
              duration={500}
            />
          </span>
          <span className="TapPageDiv_area_1_profileAmountClaimes_Span_txt2">
            Once your balance reaches 50,000, you must withdraw your funds
            before you can claim or farm again.
          </span>
        </div>
      </div>{" "}
      <div className="TapPageDiv_area_2">
        {farming === true ? (
          <Lottie
            animationData={Running}
            loop={true}
            autoPlay={true}
            className=" TapPageDiv_animation TapPageDiv_animation3"
            preserveAspectRatio="xMidYMid meet"
          />
        ) : claimFarming === true ? (
          <Lottie
            animationData={Check}
            loop={false}
            autoPlay={true}
            className=" TapPageDiv_animation TapPageDiv_animation1"
            preserveAspectRatio="xMidYMid meet"
          />
        ) : (
          <>
            {animationLoading ? (
              <Lottie
                animationData={Swam}
                loop={false}
                autoPlay={true}
                className="TapPageDiv_animation TapPageDiv_animation2"
                preserveAspectRatio="xMidYMid meet"
              />
            ) : (
              <Lottie
                animationData={Check}
                loop={false}
                autoPlay={true}
                className=" TapPageDiv_animation TapPageDiv_animation1"
                preserveAspectRatio="xMidYMid meet"
              />
            )}
          </>
        )}
      </div>
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      {/* ============== */}
      <div className="TapPageDiv_area_3">
        {farming === true ? (
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
        ) : claimFarming === true ? (
          <button
            className="TapPageDiv_area_3_btn"
            onClick={claim_earning}
            disabled={loading}
          >
            {loading ? (
              <div style={{ display: "flex", alignItems: "center" }}>
                Claiming...
                <span
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
                  2,000
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
                <span
                  style={{
                    marginLeft: "10px",
                    display: "flex",
                    alignItems: "center",
                  }}
                >
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
