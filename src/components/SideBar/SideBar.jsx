import React, { useContext, useState } from "react";
import "./SideBar.css";
import { FiMenu } from "react-icons/fi";
import { GoPlus } from "react-icons/go";
import { FaRegMessage } from "react-icons/fa6";
import { BsQuestionCircle } from "react-icons/bs";
import { GoHistory } from "react-icons/go";
import { IoSettingsOutline } from "react-icons/io5";
import { Context } from "../../context/Context";

function SideBar() {
  const [extended, setExtended] = useState(false);
  const { onSent, prevPrompts, setRecentPrompt, newChat } = useContext(Context);

  const handleExtend = () => {
    setExtended(!extended);
  };

  const loadPrompt = async (prompt) => {
    setRecentPrompt(prompt)
    await onSent(prompt)
  }

  return (
    <div className="sidebar">
      <div className="topbar">
        <div className="menu-icon">
          <FiMenu className="icon menu" onClick={handleExtend} />
        </div>
        <div onClick={() => newChat()} className="new-chat">
          <GoPlus className="icon" />
          {extended ? <p>New chat</p> : null}
        </div>
        {extended ? (
          <div className="recent">
            <p className="recent-title">Recent</p>
            {prevPrompts.map((item, index) => {
              return (
                <div onClick={() => loadPrompt(item)} key={index} className="recent-entry">
                  <FaRegMessage className="icon recent-icon" />
                  <p>{item.slice(0, 18)} ...</p>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
      <div className="bottombar">
        <div className="bottom-item recent-entry">
          <BsQuestionCircle className="icon" />
          {extended ? <p>Help</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <GoHistory className="icon" />
          {extended ? <p>Activity</p> : null}
        </div>
        <div className="bottom-item recent-entry">
          <IoSettingsOutline className="icon" />
          {extended ? <p>Settings</p> : null}
        </div>
      </div>
    </div>
  );
}

export default SideBar;
