import React from "react";

function LiveChat({ setShowLiveChat }) {
  return (
    <div className="chat">
      <div className="chat__head">
        <h3 className="chat__title">Trò chuyện trực tuyến</h3>
        <img src="/Delete.svg" alt="" className="chat__deleteIcon" onClick={() => setShowLiveChat(false)} />
        <div className="chat__line"></div>
      </div>
      <div className="chat__box">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
          <div key={item} className="user">
            <img src="/Avatar.png" alt="" className="user__avatar" />
            <div className="user__name">Ann</div>
            <div className="user__message">Hay quá em ơi</div>
          </div>
        ))}

        <div className="chat__line"></div>
      </div>
      <div className="chat__message">
        <input type="text" className="chat__message-input" />
        <img src="/Emo.svg" alt="" className="chat__message-emo" />
        <img src="/Send.svg" alt="" className="chat__message-send" />
      </div>
    </div>
  );
}

export default LiveChat;
