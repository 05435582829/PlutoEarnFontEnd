import React from "react";
import "./TaskPage.css";
import { NewTwitterIcon } from "hugeicons-react";
import { TelegramIcon, Wallet02Icon } from "hugeicons-react";

const TaskPage = () => {
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
          <a
            href="https://chainlist.org/?search=egochain"
            target="_blank"
            className="task_page_div_2_cont1_div2"
          >
            <button className="task_page_div_2_cont1_div2_btn">Start</button>
          </a>
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
          <a
            href="https://x.com/plutodex"
            target="_blank"
            className="task_page_div_2_cont1_div2"
          >
            <button className="task_page_div_2_cont1_div2_btn">Start</button>
          </a>
        </div>
        {/* <div className="task_page_div_2_cont1">
          <div className="task_page_div_2_cont1_div1">
            <div className="task_page_div_2_cont1_div1_icon">
              <NewTwitterIcon size={20} />
            </div>
            <div className="task_page_div_2_cont1_div1_txt_div">
              <div className="task_page_div_2_cont1_div1_txt_div_title">
                Follow Egoras on X
              </div>
              <div className="task_page_div_2_cont1_div1_txt_div_amount">
                +500
              </div>
            </div>
          </div>
          <a
            href="https://x.com/Egoras_auto"
            target="_blank"
            className="task_page_div_2_cont1_div2"
          >
            <button className="task_page_div_2_cont1_div2_btn">Start</button>
          </a>
        </div> */}
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
          <a
            href="https://x.com/egochainHQ"
            target="_blank"
            className="task_page_div_2_cont1_div2"
          >
            <button className="task_page_div_2_cont1_div2_btn">Start</button>
          </a>
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
          <a
            href="https://t.me/pluto_ex"
            target="_blank"
            className="task_page_div_2_cont1_div2"
          >
            <button className="task_page_div_2_cont1_div2_btn">Start</button>
          </a>
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
          <a
            href="https://t.me/pluto_newz"
            target="_blank"
            className="task_page_div_2_cont1_div2"
          >
            <button className="task_page_div_2_cont1_div2_btn">Start</button>
          </a>
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
          <a
            href="https://t.me/egochainHQ"
            target="_blank"
            className="task_page_div_2_cont1_div2"
          >
            <button className="task_page_div_2_cont1_div2_btn">Start</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default TaskPage;
