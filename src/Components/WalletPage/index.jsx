import Reac, { useState, useEffect } from "react";
import "./WalletPage.css";
import {
  ViewIcon,
  ArrowRight02Icon,
  ArrowDataTransferVerticalIcon,
  InformationCircleIcon,
} from "hugeicons-react";
const WalletPage = () => {
  const [redeemModal, setRedeemModal] = useState(false);
  const ToggleRedeemModal = () => {
    setRedeemModal(!redeemModal);
  };
  return (
    <div className="WalletPageDiv">
      <div className="WalletPageDiv_1">
        <div className="WalletPageDiv_1_cont">
          <div className="WalletPageDiv_1_cont_1">Total Balance</div>
          <div className="WalletPageDiv_1_cont_2">
            <div className="WalletPageDiv_1_cont_2_div1">
              <img
                src="/img/point_gif_coin.gif"
                alt=""
                className="WalletPageDiv_1_cont_2_div1_icon
                "
              />
              100,000 xp
            </div>
            <div className="WalletPageDiv_1_cont_2_div2">
              <ViewIcon
                size={18}
                className="WalletPageDiv_1_cont_2_div2_icon"
              />
            </div>
          </div>
          <div className="WalletPageDiv_1_cont_3">
            <button
              className="WalletPageDiv_1_cont_3_btn"
              onClick={ToggleRedeemModal}
            >
              Redeem
            </button>
          </div>
        </div>
      </div>
      <div className="WalletPageDiv_2">
        <div className="WalletPageDiv_2_title">Tokens</div>
        <div className="WalletPageDiv_2_body">
          <div className="WalletPageDiv_2_body_cont1">
            <img
              src="/img/pluto_icon.svg"
              alt=""
              className="WalletPageDiv_2_body_cont1_img"
            />
            <div className="WalletPageDiv_2_body_cont1_amount_div">
              <div className="WalletPageDiv_2_body_cont1_amount_div_txt">
                Pluto
              </div>
              <div className="WalletPageDiv_2_body_cont1_amount_div_amount">
                30,000
              </div>
            </div>
          </div>
          <div className="WalletPageDiv_2_body_cont2">
            <ArrowRight02Icon
              size={24}
              className="WalletPageDiv_2_body_cont2_icon"
            />
          </div>
        </div>
      </div>
      <div className="WalletPageDiv_3">
        <div className="WalletPageDiv_3_title">Transactions</div>
        <div className="WalletPageDiv_3_body">No transactions</div>
      </div>
      {redeemModal ? (
        <div className="redeemModal">
          <div
            className="redeemModal_cont_cancel_div"
            onClick={ToggleRedeemModal}
          ></div>
          <div className="redeemModal_cont">
            <div className="redeemModal_cont_title">Redeem Pluto</div>
            <div className="redeemModal_cont_body">
              <div className="redeemModal_cont_body_1">
                <img
                  src="/img/point_gif_coin.gif"
                  alt=""
                  className="redeemModal_cont_body_1_icon
                "
                />
                100,000 xp
              </div>
              <ArrowDataTransferVerticalIcon
                size={24}
                className="redeemModal_cont_body_icon"
              />
              <div className="redeemModal_cont_body_2">
                <img
                  src="/img/pluto_icon.svg"
                  alt=""
                  className="redeemModal_cont_body_2_img"
                />
                30,000 pluto
              </div>
              <div className="redeemModal_cont_body_3">
                <div className="redeemModal_cont_body_3_title">
                  Wallet address
                </div>
                <input
                  type="text"
                  className="redeemModal_cont_body_3_input"
                  placeholder="0xXxxx"
                />
              </div>
              <div className="redeemModal_cont_body_4">
                <button className="redeemModal_cont_body_4_btn">Redeem</button>
              </div>
              <div className="redeemModal_cont_body_5">
                <div className="redeemModal_cont_body_5_div">
                  <InformationCircleIcon
                    size={16}
                    className="redeemModal_cont_body_5_div_icon"
                  />
                  Make sure your wallet address is an ego20 wallet address
                </div>
                <div className="redeemModal_cont_body_5_div">
                  <InformationCircleIcon
                    size={16}
                    className="redeemModal_cont_body_5_div_icon"
                  />
                  Minimum withdrawable amount 10,000 pluto
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default WalletPage;
