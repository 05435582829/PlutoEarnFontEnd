import React, { useState, useEffect } from "react";
import { Sheet } from "react-modal-sheet";
import { Cancel01Icon } from "hugeicons-react";
// import "react-modal-sheet/dist/react-modal-sheet.css";
// import { SlickBottomSheet } from "slick-bottom-sheet";
import "./ReferralPage.css";
import Lottie from "lottie-react";
import Friends from "../LottieFiles/Friends.json";
import toast, { Toaster } from "react-hot-toast";

const ReferralPage = () => {
  const [redeemModal, setRedeemModal] = useState(false);
  // const ref = React.useRef < SlickBottomSheetControl > null;
  const ToggleRedeemModal = () => {
    setRedeemModal(!redeemModal);
  };
  const copyText = () => {
    const textToCopy = document.getElementById("myInput").textContent;
    if (navigator.clipboard) {
      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          toast.success("Link copied to clipboard!");
        })
        .catch((err) => {
          toast.error("Failed to copy link: ", err);
        });
    } else {
      // Fallback method for older browsers
      const textArea = document.createElement("textarea");
      textArea.value = textToCopy;
      document.body.appendChild(textArea);
      textArea.select();
      try {
        document.execCommand("copy");
        toast.success("Link copied to clipboard!");
      } catch (err) {
        toast.error("Failed to copy link: ", err);
      }
      document.body.removeChild(textArea);
    }
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
        disableScrollLocking={false}
        // disableDrag={true}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            {" "}
            <div className="close_Sheet" onClick={ToggleRedeemModal}>
              <Cancel01Icon className="close_icon" size={20} />
            </div>
            <div className="redeemModal_cont">
              <div className="redeemModal_cont_body">
                <div className="redeemModal_cont_body_3b">
                  <div className="redeemModal_cont_title">Invite Link</div>
                  <input
                    id="myInput"
                    type="text"
                    value={"t.me/plutoEarn/ref=124hbuf"}
                    className="redeemModal_cont_body_3_input"
                    placeholder="0xXxxx"
                  />
                  <div></div>
                </div>
                <div className="redeemModal_cont_body_4">
                  <button
                    className="redeemModal_cont_body_4_btn"
                    onClick={copyText}
                  >
                    Copy Invite Link
                  </button>
                </div>
              </div>
            </div>
          </Sheet.Content>
        </Sheet.Container>
        <Sheet.Backdrop />
      </Sheet>

      <Toaster />
    </div>
  );
};

export default ReferralPage;
