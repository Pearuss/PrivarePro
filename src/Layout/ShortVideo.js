import React, { useState } from "react";
import LiveChat from "./LiveChat";
import CommentDialog from "../Dialogs/CommentDialog";
import ShareDialog from "../Dialogs/ShareDialog";

function ShortVideo() {
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);
  return (
    <div className="short-video container">
      <div className="card">
        <div className="card__video">
          <img className="card__img" src="/VideoDemo.png" alt="" />
          <div className="card__info">
            <div className="card__user">
              <img className="card__user-avatar" src="/Avatar.png" alt="" />
              <div className="card__user-name">finDmusic</div>
              <button className="card__user-button">Theo dõi</button>
            </div>
            <div className="card__des">
              Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa) #short
              #beauty #girl
            </div>
          </div>
        </div>
        <LiveChat />
        <div className="feature">
          <div className="feature__group">
            <button className="feature__btn">
              <img src="/LoveIcon.svg" alt="" />
            </button>
            <p className="feature__number">1,1 N</p>
          </div>
          <div className="feature__group">
            <button
              className="feature__btn"
              onClick={() => setShowComment(true)}
            >
              <img src="/Comment.svg" alt="" />
            </button>
            <p className="feature__number">123</p>
          </div>
          <div className="feature__group">
            <button className="feature__btn">
              <img src="/Save.svg" alt="" />
            </button>
            <p className="feature__number">Lưu</p>
          </div>
          <div className="feature__group">
            <button
              className="feature__btn"
              onClick={() => setShowShare(true)}
            >
              <img src="/Share.svg" alt="" />
            </button>
            <p className="feature__number">Chia sẻ</p>
          </div>
          <div className="feature__group">
            <button className="feature__btn">
              <img src="/Dot.svg" alt="" />
            </button>
          </div>
        </div>
      </div>
      <CommentDialog open={showComment} setOpen={setShowComment} />
      <ShareDialog open={showShare} setOpen={setShowShare} />
    </div>
  );
}

export default ShortVideo;
