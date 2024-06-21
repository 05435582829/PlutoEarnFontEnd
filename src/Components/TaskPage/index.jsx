import React, { useState, useEffect, useContext } from "react";
import "./TaskPage.css";
import { NewTwitterIcon } from "hugeicons-react";
import { TelegramIcon, Wallet02Icon } from "hugeicons-react";
import { CompleteTask } from "../../constants/api";
import { Tick01Icon } from "hugeicons-react";
import { UserContext } from "../../Utils/UserContext";

const TaskPage = () => {
  const { task } = useContext(UserContext);
  const [metamaskTask, setMetaMaskTask] = useState(false);
  const [egochainX, setEgochainX] = useState(false);
  const [egochainCommunity, setEgochainCommunity] = useState(false);
  const [plutoX, setPlutoX] = useState(false);
  const [plutoCommunity, setPlutoCommunity] = useState(false);
  const [plutoChannel, setPlutoChannel] = useState(false);

  const handleHapticFeedback = () => {
    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.HapticFeedback.impactOccurred("medium"); // Adjust feedback type as needed
    }
  };
  const Complete_task_func = async (task) => {
    const response = await CompleteTask(task);
    console.log(response);
    if (task === "metamask") {
      if (response.success === true) {
        window.open("https://chainlist.org/?search=egochain", "_blank");
        const timer = setTimeout(() => {
          setMetaMaskTask(true);
        }, 5000);
        return;
      }
      setMetaMaskTask(false);
      return;
    }

    if (task === "egochainX") {
      if (response.success === true) {
        window.open("https://x.com/egochainHQ", "_blank");
        const timer = setTimeout(() => {
          setEgochainX(true);
        }, 5000);
        return;
      }
      setEgochainX(false);
      return;
    }

    if (task === "plutoX") {
      if (response.success === true) {
        window.open("https://x.com/plutodex", "_blank");
        const timer = setTimeout(() => {
          setPlutoX(true);
        }, 5000);
        return;
      }
      setPlutoX(false);
      return;
    }

    if (task === "plutoT") {
      if (response.success === true) {
        window.open("https://t.me/pluto_ex", "_blank");
        const timer = setTimeout(() => {
          setPlutoCommunity(true);
        }, 5000);
        return;
      }
      setPlutoCommunity(false);
      return;
    }

    if (task === "plutoC") {
      if (response.success === true) {
        window.open("https://t.me/pluto_newz", "_blank");
        const timer = setTimeout(() => {
          setPlutoChannel(true);
        }, 5000);
        return;
      }
      setPlutoChannel(false);
      return;
    }

    if (task === "egochainT") {
      if (response.success === true) {
        window.open("https://t.me/egochainHQ", "_blank");
        const timer = setTimeout(() => {
          setEgochainCommunity(true);
        }, 5000);
        return;
      }
      setEgochainCommunity(false);
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
            >
              Start
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
            >
              Start
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
            >
              Start
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
            >
              Start
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
            >
              Start
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
            >
              Start
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
