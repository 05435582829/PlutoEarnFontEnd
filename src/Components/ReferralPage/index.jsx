import React, { useState, useEffect } from "react";
import { Sheet } from "react-modal-sheet";
import "./ReferralPage.css";
import Lottie from "lottie-react";
import Friends from "../LottieFiles/Friends.json";
const ReferralPage = () => {
  const [redeemModal, setRedeemModal] = useState(false);
  const ToggleRedeemModal = () => {
    setRedeemModal(!redeemModal);
  };
  return (
    <div className="Referral_div">
      <div className="Referral_div_1">
        <div className="Referral_div_1_title">Invite Friends</div>{" "}
        <div className="Referral_div_1_span">
          Earn 20% for your direct referrals, 10% for their referrals, then 5%,
          2.5% and 1.25% for your fifth-level referrals. Plus Earn an instant
          auto refill for each invite.
        </div>{" "}
      </div>
      <div className="Referral_div_2">
        <Lottie
          animationData={Friends}
          loop={true}
          autoPlay={true}
          className="Referral_div_2_animation"
          preserveAspectRatio="xMidYMid meet"
        />
      </div>
      <div className="Referral_div_3">
        {" "}
        <button className="TapPageDiv_area_3_btn" onClick={ToggleRedeemModal}>
          Invite a friend
        </button>
      </div>
      <Sheet
        isOpen={redeemModal}
        onClose={() => ToggleRedeemModal()}
        detent="Content-height"
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            {" "}
            <div className="redeemModal_cont">
              <div className="redeemModal_cont_body">
                <div className="redeemModal_cont_body_3">
                  <div className="redeemModal_cont_body_3_title">
                    Invite Link
                  </div>
                  <input
                    type="text"
                    value={"t.me/plutoEarn/ref=124hbuf"}
                    className="redeemModal_cont_body_3_input"
                    placeholder="0xXxxx"
                  />
                </div>
                <div className="redeemModal_cont_body_4">
                  <button className="redeemModal_cont_body_4_btn">
                    Copy Invite Link
                  </button>
                </div>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>
    </div>
  );
};

export default ReferralPage;
