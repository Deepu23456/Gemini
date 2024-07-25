import React, { useContext, useEffect, useRef } from "react";
import "./MainSection.css";
import { assets } from "../../assets/assets";
import { LiaCompass } from "react-icons/lia";
import { IoBulbOutline } from "react-icons/io5";
import { FaCode } from "react-icons/fa6";
import { FaRegMessage } from "react-icons/fa6";
import { TbPhotoSearch } from "react-icons/tb";
import { IoMicOutline } from "react-icons/io5";
import { VscSend } from "react-icons/vsc";
import { Context } from "../../context/Context";

function MainSection() {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    setInput,
    input,
  } = useContext(Context);

  const handleSend = async (e) => {
    if (e.key === "Enter") await onSent();
  };

  return (
    <div className="main">
      <div className="nav">
        <p>Gemini</p>
        <img src={assets.user_icon} alt="" />
      </div>
      <div className="main-container">
        {!showResult ? (
          <>
            <div className="greet">
              <p>
                <span>Hello, Dev.</span>
              </p>
              <p>How can I help you today?</p>
            </div>
            <div className="cards">
              <div
                onClick={(e) => {
                  setInput(e.target.children[0].innerText);
                }}
                className="card"
              >
                <p className="card-para">
                  Suggest beautiful places to see on an upcoming trip
                </p>
                <div className="icon-container">
                  <LiaCompass className="icon" />
                </div>
              </div>
              <div
                onClick={(e) => {
                  setInput(e.target.children[0].innerText);
                }}
                className="card"
              >
                <p>Briefly summarize this concept: urban planning</p>
                <div className="icon-container">
                  <IoBulbOutline className="icon" />
                </div>
              </div>
              <div
                onClick={(e) => {
                  setInput(e.target.children[0].innerText);
                }}
                className="card"
              >
                <p>Brainstorm team bonding activities for our work retreat</p>
                <div className="icon-container">
                  <FaRegMessage className="icon" />
                </div>
              </div>
              <div
                onClick={(e) => {
                  setInput(e.target.children[0].innerText);
                }}
                className="card"
              >
                <p>Improve the readability of the following code</p>
                <div className="icon-container">
                  <FaCode className="icon" />
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="result">
            <div className="result-title">
              <img src={assets.user_icon} alt="" />
              <p>{recentPrompt}</p>
            </div>
            <div className="result-data">
              <img src={assets.gemini_icon} alt="" />
              {loading ? (
                <div className="loader">
                  <hr />
                  <hr />
                  <hr />
                </div>
              ) : (
                <p dangerouslySetInnerHTML={{ __html: resultData }}></p>
              )}
            </div>
          </div>
        )}
        <div className="main-bottom">
          <div className="search-box">
            <input
              onChange={(e) => setInput(e.target.value)}
              value={input}
              onKeyDown={handleSend}
              type="text"
              placeholder="Enter a prompt here"
            />
            <div className="icons">
              <div className="icon-container">
                <TbPhotoSearch className="icon" />
              </div>
              <div className="icon-container">
                <IoMicOutline className="icon" />
              </div>
              {input ? (
                <div className="icon-container">
                  <VscSend onClick={() => onSent()} className="icon" />
                </div>
              ) : null}
            </div>
          </div>
          <div className="bottom-info">
            <p>
              Gemini may display inaccurate info, including about people, so
              double-check its responses. Your privacy and Gemini Apps
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainSection;
