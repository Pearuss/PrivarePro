import React from "react";

function LiveChat() {
  return (
    <div className="chat">
      <div className="chat__head">
        <h3 className="chat__title">Trò chuyện trực tuyến</h3>
        <img src="/Delete.svg" alt="" className="chat__deleteIcon" />
        <div className="chat__line"></div>
      </div>
      <div className="chat__box">
        <div className="user">
          <img src="/Avatar.png" alt="" className="user__avatar" />
          <div className="user__name">Ann</div>
          <div className="user__message">Hay quá em ơi</div>
        </div>
        <div className="user">
          <img src="/Avatar.png" alt="" className="user__avatar" />
          <div className="user__name">Ann</div>
          <div className="user__message">Hay quá em ơi</div>
        </div>
        <div className="chat__line"></div>
      </div>
      <div className="chat__message">
        <input type="text" className="chat__message-input" />
        <img src="/Emo.svg" alt="" className="chat__message-emo" />
        <img src="/Send.svg" alt="" className="chat__message-send"/>
      </div>
    </div>
  );
}

export default LiveChat;
