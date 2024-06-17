import React, { useState, useEffect, useContext } from "react";
import { Sheet } from "react-modal-sheet";
import { Cancel01Icon } from "hugeicons-react";

import "./WalletPage.css";
import {
  ViewIcon,
  ArrowRight02Icon,
  ArrowDataTransferVerticalIcon,
  InformationCircleIcon,
} from "hugeicons-react";
import { WithdrawReward } from "../../constants/api";
import { UserContext } from "../../Utils/UserContext";
import toast, { Toaster } from "react-hot-toast";
import ClipLoader from "react-spinners/ClipLoader";
import NodataComp from "../NodatComp/NodataComp";
import { GetTransactions } from "../../constants/api";
import { numberWithCommas } from "../../assets/js/numberWithCommas";

const WalletPage = () => {
  const { pre_data, setPredata, userBalance } = useContext(UserContext);
  const [redeemModal, setRedeemModal] = useState(false);
  const [wallet, setWallet] = useState("");
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  const [getTransactionLoding, setGetTransactionLoding] = useState(false);
  const [transaction, setTransaction] = useState([]);
  const [tranPopUp, setTranPopUp] = useState(0);

  const ToggleRedeemModal = () => {
    setRedeemModal(!redeemModal);
  };
  const withdraw_funds = async () => {
    setLoading(true);
    setDisabled(true);
    const res = await WithdrawReward({ wallet_address: wallet });
    console.log(res);
    if (res.success === true) {
      setLoading(false);
      setDisabled(false);
      toast.success("You have successfully withdrawn your pluto tokens");
      window.location.reload();
      return;
    }
    setLoading(false);
    setDisabled(false);
    toast.error(res.data.errorMessage);
  };
  const onChangeWallet = (e) => {
    setWallet(e.target.value);
    console.log(e.target.value);
  };
  useEffect(() => {
    if (userBalance <= 0) {
      setDisabled(true);
      return;
    }
    if (userBalance > 0) {
      setDisabled(false);
      return;
    }
  }, []);
  const fetchTransaction = async () => {
    const res = await GetTransactions();
    console.log(res);
    setTransaction(res.data);
  };
  useEffect(() => {
    fetchTransaction();
  }, []);

  const groups = transaction.reduce((groups, data) => {
    const date = data.createdAt.split("T")[0];
    if (!groups[date]) {
      groups[date] = [];
    }
    groups[date].push(data);
    return groups;
  }, {});

  // Edit: to add it in the array format instead
  const groupArrays = Object.keys(groups).map((date) => {
    return {
      date,
      data: groups[date],
    };
  });

  console.log(groupArrays);
  const ChangeTranPopUp = (e) => {
    let currentTarget = e.currentTarget.id;
    console.log(currentTarget);
    setTranPopUp(currentTarget);
  };
  const closeTranPop = () => {
    setTranPopUp(0);
    console.log("i am not here");
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
              {numberWithCommas(parseFloat(userBalance).toFixed(2))}
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
              src="/img/point_gif_coin.gif"
              alt=""
              className="WalletPageDiv_1_cont_2_div1_icon
                "
            />
            <div className="WalletPageDiv_2_body_cont1_amount_div">
              <div className="WalletPageDiv_2_body_cont1_amount_div_txt">
                Pluto
              </div>
              <div className="WalletPageDiv_2_body_cont1_amount_div_amount">
                {numberWithCommas(parseFloat(userBalance).toFixed(2))}
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
        {getTransactionLoding ? (
          <div className="loader_div">
            <BeatLoader color="#fff" />
            <span className="loader_div_span">Fetching Transactions...</span>
          </div>
        ) : (
          <>
            {" "}
            {groupArrays.length < 1 ? (
              <NodataComp />
            ) : (
              <>
                {groupArrays.slice(0, 3).map((data) => (
                  <>
                    <div className="transactionBody1_date">{data.date}</div>

                    {data.data.map((data) => (
                      <div
                        className="transactionBody_cont1"
                        id={data.id}
                        // key={data.id}
                        // onClick={ChangeTranPopUp}
                      >
                        <div className="transactionBody_cont1_areabody1">
                          <div className="transactionBody_cont1_img">
                            <img
                              src="/img/pluto_swap_icon.png"
                              alt=""
                              className="transactionBody_cont1_img_img"
                            />
                          </div>
                          <div className="transactionBody_cont1_area1">
                            <div className="transactionBody_cont1_area1_head">
                              {data.to_email === "samuelify225@gmail.com"
                                ? data.email
                                : data.to_email}
                            </div>
                            <div className="transactionBody_cont1_area1_time">
                              {data.status}
                            </div>
                          </div>
                        </div>
                        <div className="transactionBody_cont1_areabody2">
                          <div className="transactionBody_cont1_areabody2_amount">
                            {/* {data.to_email === "samuelify225@gmail.com" ? (
                              <div style={{ color: "#90ff90" }}>
                                {" "}
                                +₦
                                {numberWithCommas(
                                  parseFloat(data.amount).toFixed(2)
                                )}
                              </div>
                            ) : (
                              <div style={{ color: "#ff8686" }}>
                                {" "}
                                -₦
                                {numberWithCommas(
                                  parseFloat(data.amount).toFixed(2)
                                )}
                              </div>
                            )} */}
                            <span className="transactionBody_cont1_areabody2_amount_span">
                              {numberWithCommas(
                                parseFloat(data.amount).toFixed(2)
                              )}
                              <div className="transactionBody_cont1_areabody2_amount_span_txt">
                                {data.type}
                              </div>
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </>
                ))}
              </>
            )}
          </>
        )}
      </div>

      <Sheet
        isOpen={redeemModal}
        onClose={() => ToggleRedeemModal()}
        // detent="full-height"
        detent="Content-height"
        disableScrollLocking={false}
        className="bottom_sheet"
        // style={{ zIndex: "1000" }}
      >
        <Sheet.Container>
          <Sheet.Header />
          <Sheet.Content>
            <div className="redeemModal_cont">
              <div className="redeemModal_cont_title">Redeem</div>
              <div className="redeemModal_cont_body">
                {/* <div className="redeemModal_cont_body_1">
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
                /> */}
                <div className="redeemModal_cont_body_2">
                  <img
                    src="/img/point_gif_coin.gif"
                    alt=""
                    className="redeemModal_cont_body_1_icon
                "
                  />
                  <span>
                    {numberWithCommas(parseFloat(userBalance).toFixed(2))} pluto
                  </span>
                </div>
                <div className="redeemModal_cont_body_3">
                  <div className="redeemModal_cont_body_3_title">
                    Receiver address
                  </div>
                  <input
                    type="text"
                    className="redeemModal_cont_body_3_input"
                    placeholder="0xXxxx"
                    onChange={onChangeWallet}
                    value={wallet}
                  />
                </div>
                <div className="redeemModal_cont_body_4">
                  {wallet === "" ? (
                    <button
                      className="redeemModal_cont_body_4_btn"
                      disabled={true}
                    >
                      Input Receiver Address
                    </button>
                  ) : (
                    <button
                      className="redeemModal_cont_body_4_btn"
                      onClick={withdraw_funds}
                      disabled={disabled}
                    >
                      {loading ? (
                        <div style={{ display: "flex", alignItems: "center" }}>
                          Redeeming...
                          <span style={{ marginLeft: "10px" }}>
                            <ClipLoader color="#fff" size={20} />
                          </span>
                        </div>
                      ) : (
                        <>Redeem</>
                      )}
                    </button>
                  )}
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
                    Minimum withdrawable amount 1,000 pluto
                  </div>
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

export default WalletPage;
