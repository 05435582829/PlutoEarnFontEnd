import React from "react";
import "./WalletPage.css";
import { ViewIcon, ArrowRight02Icon } from "hugeicons-react";
const WalletPage = () => {
  return (
    <div className="WalletPageDiv">
      <div className="WalletPageDiv_1">
        <div className="WalletPageDiv_1_cont">
          <div className="WalletPageDiv_1_cont_1">Total Balance</div>
          <div className="WalletPageDiv_1_cont_2">
            <div className="WalletPageDiv_1_cont_2_div1">
              <img
                src="/img/pluto_icon.svg"
                alt=""
                className="WalletPageDiv_1_cont_2_div1_icon
                "
              />
              100,000
            </div>
            <div className="WalletPageDiv_1_cont_2_div2">
              <ViewIcon
                size={32}
                className="WalletPageDiv_1_cont_2_div2_icon"
              />
            </div>
          </div>
          <div className="WalletPageDiv_1_cont_3">
            <button className="WalletPageDiv_1_cont_3_btn">Withdraw</button>
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
              size={32}
              className="WalletPageDiv_2_body_cont2_icon"
            />
          </div>
        </div>
      </div>
      <div className="WalletPageDiv_3">
        <div className="WalletPageDiv_3_title">Transactions</div>
        <div className="WalletPageDiv_3_body">No transactions</div>
      </div>
    </div>
  );
};

export default WalletPage;
