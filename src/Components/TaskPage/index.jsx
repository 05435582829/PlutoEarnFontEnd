import React, { useState, useEffect, useContext } from "react";
import "./TaskPage.css";
import { NewTwitterIcon } from "hugeicons-react";
import { TelegramIcon, Wallet02Icon } from "hugeicons-react";
import { CompleteTask } from "../../constants/api";
import { Tick01Icon } from "hugeicons-react";
import { UserContext } from "../../Utils/UserContext";
import ClipLoader from "react-spinners/ClipLoader";

const TaskPage = () => {
  const { task, setTask } = useContext(UserContext);
  const [metamaskTask, setMetaMaskTask] = useState(false);
  const [metamaskTaskLoader, setMetaMaskTaskLoader] = useState(false);
  const [egochainX, setEgochainX] = useState(false);
  const [egochainXLoader, setEgochainXLoader] = useState(false);
  const [egochainCommunity, setEgochainCommunity] = useState(false);
  const [egochainCommunityLoader, setEgochainCommunityLoader] = useState(false);
  const [plutoX, setPlutoX] = useState(false);
  const [plutoXLoader, setPlutoXLoader] = useState(false);
  const [plutoCommunity, setPlutoCommunity] = useState(false);
  const [plutoCommunityLoader, setPlutoCommunityLoader] = useState(false);
  const [plutoChannel, setPlutoChannel] = useState(false);
  const [plutoChannelLoader, setPlutoChannelLoader] = useState(false);

  const handleHapticFeedback = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred("medium"); // Adjust feedback type as needed
    }
  };

  console.log("====================================");
  console.log(task);
  console.log("====================================");

  const Complete_task_func = async (task) => {
    const response = await CompleteTask(task);
    console.log(response);
    if (task === "metamask") {
      setMetaMaskTaskLoader(true);
      if (response.success === true) {
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.openLink(
            "https://chainlist.org/?search=egochain"
          );
        } else {
          window.open("https://chainlist.org/?search=egochain", "_blank");
        }

        const timer = setTimeout(() => {
          setMetaMaskTask(true);
          setMetaMaskTaskLoader(false);
          setTask({
            ...task,
            metamask: "COMPLETED",
          });
        }, 5000);
        return;
      }
      setMetaMaskTaskLoader(false);
      setMetaMaskTask(false);
      return;
    }

    if (task === "egochainX") {
      setEgochainXLoader(true);
      if (response.success === true) {
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.openLink("https://x.com/egochainHQ");
        } else {
          window.open("https://x.com/egochainHQ", "_blank");
        }

        const timer = setTimeout(() => {
          setEgochainX(true);
          setEgochainXLoader(false);
          setTask({
            ...task,
            egochainX: "COMPLETED",
          });
        }, 5000);
        return;
      }
      setEgochainX(false);
      setEgochainXLoader(false);
      return;
    }

    if (task === "plutoX") {
      setPlutoXLoader(true);
      if (response.success === true) {
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.openLink("https://x.com/plutodex");
        } else {
          window.open("https://x.com/plutodex", "_blank");
        }
        const timer = setTimeout(() => {
          setPlutoX(true);
          setPlutoXLoader(false);
          setTask({
            ...task,
            plutoX: "COMPLETED",
          });
        }, 5000);
        return;
      }
      setPlutoXLoader(false);
      setPlutoX(false);
      return;
    }

    if (task === "plutoT") {
      setPlutoCommunityLoader(true);
      if (response.success === true) {
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.openTelegramLink("https://t.me/pluto_ex");
        } else {
          window.open("https://t.me/pluto_ex", "_blank");
        }

        const timer = setTimeout(() => {
          setPlutoCommunity(true);
          setPlutoCommunityLoader(false);
          setTask({
            ...task,
            plutoT: "COMPLETED",
          });
        }, 5000);
        return;
      }
      setPlutoCommunity(false);
      setPlutoCommunityLoader(false);

      return;
    }

    if (task === "plutoC") {
      setPlutoChannelLoader(true);
      if (response.success === true) {
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.openTelegramLink("https://t.me/pluto_newz");
        } else {
          window.open("https://t.me/pluto_newz", "_blank");
        }

        const timer = setTimeout(() => {
          setPlutoChannel(true);
          setPlutoChannelLoader(false);
          setTask({
            ...task,
            plutoC: "COMPLETED",
          });
        }, 5000);
        return;
      }
      setPlutoChannelLoader(false);
      setPlutoChannel(false);
      return;
    }

    if (task === "egochainT") {
      setEgochainCommunityLoader(true);
      if (response.success === true) {
        if (window.Telegram && window.Telegram.WebApp) {
          window.Telegram.WebApp.openTelegramLink("https://t.me/egochainHQ");
        } else {
          window.open("https://t.me/egochainHQ", "_blank");
        }

        const timer = setTimeout(() => {
          setEgochainCommunity(true);
          setEgochainCommunityLoader(false);
          setTask({
            ...task,
            egochainT: "COMPLETED",
          });
        }, 5000);
        return;
      }
      setEgochainCommunity(false);
      setEgochainCommunityLoader(false);
      return;
    }
  };

  useEffect(() => {
    if (task) {
      if (task.metamask === "COMPLETED") {
        setMetaMaskTask(true);
        return;
      }
      return;
    }
  }, [task]);

  useEffect(() => {
    if (task) {
      if (task.egochainX === "COMPLETED") {
        setEgochainX(true);
        return;
      }
      return;
    }
  }, [task]);

  useEffect(() => {
    if (task) {
      if (task.plutoX === "COMPLETED") {
        setPlutoX(true);
        return;
      }
      return;
    }
  }, [task]);

  useEffect(() => {
    if (task) {
      if (task.plutoT === "COMPLETED") {
        setPlutoCommunity(true);
        return;
      }
      return;
    }
  }, [task]);

  useEffect(() => {
    if (task) {
      if (task.plutoC === "COMPLETED") {
        setPlutoChannel(true);
        true;
        return;
      }
      return;
    }
  }, [task]);

  useEffect(() => {
    if (task) {
      if (task.egochainT === "COMPLETED") {
        setEgochainCommunity(true);
        true;
        return;
      }
      return;
    }
  }, [task]);

  return (
    <div className="task_page_div">
      <div className="task_page_div_1">
        <div className="task_page_div_1_title">Available Tasks</div>
        <div className="task_page_div_1_para">
          Complete any task and receive instant rewards!
        </div>
      </div>
      <div className="task_page_div_2">
        <div className="task_page_div_2_cont1">
          <div className="task_page_div_2_cont1_div1">
            <div className="task_page_div_2_cont1_div1_icon">
              <Wallet02Icon size={20} />
            </div>
            <div className="task_page_div_2_cont1_div1_txt_div">
              <div className="task_page_div_2_cont1_div1_txt_div_title">
                Add Egochain to Metamask
              </div>
              <div className="task_page_div_2_cont1_div1_txt_div_amount">
                +1,000
              </div>
            </div>
          </div>

          {metamaskTask ? (
            <button className="task_page_div_2_cont1_div2_btn" disabled>
              <Tick01Icon size={20} />
            </button>
          ) : (
            <button
              className="task_page_div_2_cont1_div2_btn"
              onClick={() => {
                handleHapticFeedback();
                Complete_task_func("metamask");
              }}
              disabled={metamaskTaskLoader}
            >
              {metamaskTaskLoader ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                "Start"
              )}
            </button>
          )}
        </div>
        <div className="task_page_div_2_cont1">
          <div className="task_page_div_2_cont1_div1">
            <div className="task_page_div_2_cont1_div1_icon">
              <NewTwitterIcon size={20} />
            </div>
            <div className="task_page_div_2_cont1_div1_txt_div">
              <div className="task_page_div_2_cont1_div1_txt_div_title">
                Follow Pluto on X
              </div>
              <div className="task_page_div_2_cont1_div1_txt_div_amount">
                +500
              </div>
            </div>
          </div>

          {plutoX ? (
            <button className="task_page_div_2_cont1_div2_btn" disabled>
              <Tick01Icon size={20} />
            </button>
          ) : (
            <button
              className="task_page_div_2_cont1_div2_btn"
              onClick={() => {
                handleHapticFeedback();
                Complete_task_func("plutoX");
              }}
              disabled={plutoXLoader}
            >
              {plutoXLoader ? <ClipLoader color="#fff" size={15} /> : "Start"}
            </button>
          )}
        </div>

        <div className="task_page_div_2_cont1">
          <div className="task_page_div_2_cont1_div1">
            <div className="task_page_div_2_cont1_div1_icon">
              <NewTwitterIcon size={20} />
            </div>
            <div className="task_page_div_2_cont1_div1_txt_div">
              <div className="task_page_div_2_cont1_div1_txt_div_title">
                Follow Egochain on X
              </div>
              <div className="task_page_div_2_cont1_div1_txt_div_amount">
                +500
              </div>
            </div>
          </div>

          {egochainX ? (
            <button className="task_page_div_2_cont1_div2_btn" disabled>
              <Tick01Icon size={20} />
            </button>
          ) : (
            <button
              className="task_page_div_2_cont1_div2_btn"
              onClick={() => {
                handleHapticFeedback();
                Complete_task_func("egochainX");
              }}
              disabled={egochainXLoader}
            >
              {egochainXLoader ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                "Start"
              )}
            </button>
          )}
        </div>
        <div className="task_page_div_2_cont1">
          <div className="task_page_div_2_cont1_div1">
            <div className="task_page_div_2_cont1_div1_icon">
              <TelegramIcon size={20} />
            </div>
            <div className="task_page_div_2_cont1_div1_txt_div">
              <div className="task_page_div_2_cont1_div1_txt_div_title">
                Join Pluto Community
              </div>
              <div className="task_page_div_2_cont1_div1_txt_div_amount">
                +500
              </div>
            </div>
          </div>

          {plutoCommunity ? (
            <button className="task_page_div_2_cont1_div2_btn" disabled>
              <Tick01Icon size={20} />
            </button>
          ) : (
            <button
              className="task_page_div_2_cont1_div2_btn"
              onClick={() => {
                handleHapticFeedback();
                Complete_task_func("plutoT");
              }}
              disabled={plutoCommunityLoader}
            >
              {plutoCommunityLoader ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                "Start"
              )}
            </button>
          )}
        </div>
        <div className="task_page_div_2_cont1">
          <div className="task_page_div_2_cont1_div1">
            <div className="task_page_div_2_cont1_div1_icon">
              <TelegramIcon size={20} />
            </div>
            <div className="task_page_div_2_cont1_div1_txt_div">
              <div className="task_page_div_2_cont1_div1_txt_div_title">
                Subscribe to pluto channel
              </div>
              <div className="task_page_div_2_cont1_div1_txt_div_amount">
                +500
              </div>
            </div>
          </div>

          {plutoChannel ? (
            <button className="task_page_div_2_cont1_div2_btn" disabled>
              <Tick01Icon size={20} />
            </button>
          ) : (
            <button
              className="task_page_div_2_cont1_div2_btn"
              onClick={() => {
                handleHapticFeedback();
                Complete_task_func("plutoC");
              }}
              disabled={plutoChannelLoader}
            >
              {plutoChannelLoader ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                "Start"
              )}
            </button>
          )}
        </div>
        {/* <div className="task_page_div_2_cont1">
          <div className="task_page_div_2_cont1_div1">
            <div className="task_page_div_2_cont1_div1_icon">
              <TelegramIcon size={20} />
            </div>
            <div className="task_page_div_2_cont1_div1_txt_div">
              <div className="task_page_div_2_cont1_div1_txt_div_title">
                Join Egoras Channel
              </div>
              <div className="task_page_div_2_cont1_div1_txt_div_amount">
                +500
              </div>
            </div>
          </div>
          <a
            href="https://t.me/egorasmarket"
            target="_blank"
            className="task_page_div_2_cont1_div2"
          >
            <button className="task_page_div_2_cont1_div2_btn">Start</button>
          </a>
        </div> */}
        <div className="task_page_div_2_cont1">
          <div className="task_page_div_2_cont1_div1">
            <div className="task_page_div_2_cont1_div1_icon">
              <TelegramIcon size={20} />
            </div>
            <div className="task_page_div_2_cont1_div1_txt_div">
              <div className="task_page_div_2_cont1_div1_txt_div_title">
                Join Egochain Community
              </div>
              <div className="task_page_div_2_cont1_div1_txt_div_amount">
                +500
              </div>
            </div>
          </div>

          {egochainCommunity ? (
            <button className="task_page_div_2_cont1_div2_btn" disabled>
              <Tick01Icon size={20} />
            </button>
          ) : (
            <button
              className="task_page_div_2_cont1_div2_btn"
              onClick={() => {
                handleHapticFeedback();
                Complete_task_func("egochainT");
              }}
              disabled={egochainCommunityLoader}
            >
              {egochainCommunityLoader ? (
                <ClipLoader color="#fff" size={15} />
              ) : (
                "Start"
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
