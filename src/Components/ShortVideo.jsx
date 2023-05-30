import React, { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import CommentDialog from "../Dialogs/CommentDialog";
import ShareDialog from "../Dialogs/ShareDialog";
import { useKeyboardEvent } from "@react-hookz/web/esm/useKeyboardEvent";
import useToggle from "../hooks/useToggle";
import { useLocation } from "react-router-dom";
import ShortStored from "./ShortStored";

function ShortVideo() {
  const [showComment, setShowComment] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [followed, setFollowed] = useToggle(false);

  const location = useLocation();
  const isLive = location.pathname === "/live" || false;
  const isLove = location.pathname === "/yeu-thich" || false;

  useEffect(() => {
    window.addEventListener("keydown", function (e) {
      if (e.keyCode == 32 && e.target == document.body) {
        e.preventDefault();
      }
    });
  }, []);

  useKeyboardEvent(
    true,
    (ev) => {
      console.log(ev.key);
      if (ev.key === " ") console.log("space keyboard");
      return;
    },
    [],
    { eventOptions: { passive: true } }
  );
  return (
    <div className="short-video ">
      <div className="card">
        <div className="card__video">
          <img className="card__img" src="/VideoDemo.png" alt="" />
          <div className="card__header">
            {isLive && (
              <div className="live-info">
                <button className="btn btn--red">TRỰC TIẾP</button>
                <img src="person-live.svg" alt="person view live" />
                <span>725</span>
              </div>
            )}
            <img src="muted.svg" alt="" className="card__speaker" />
          </div>
          <div className="card__info">
            <div className="card__user">
              <img className="card__user-avatar" src="/Avatar.png" alt="" />
              <div className="card__user-name">finDmusic</div>
              <button
                className={followed ? "btn btn--gray" : "btn btn--white"}
                onClick={setFollowed}
              >
                {followed ? "Đã theo dõi" : "Theo dõi"}
              </button>
            </div>
            <div className="card__des">
              Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa) #short
              #beauty #girl
            </div>
          </div>
        </div>
        {isLive && showLiveChat && (
          <LiveChat setShowLiveChat={setShowLiveChat} />
        )}
        {isLove && <ShortStored />}
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
              onClick={() => {
                isLive ? setShowLiveChat(true) : setShowComment(true);
              }}
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
            <button className="feature__btn" onClick={() => setShowShare(true)}>
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
      <div className="short-video__redirect-btn">
        <img src="/ArrowUp.svg" alt="" />
        <img src="/ArrowLight.svg" alt="" />
      </div>
      <CommentDialog open={showComment} setOpen={setShowComment} />
      <ShareDialog open={showShare} setOpen={setShowShare} />
    </div>
  );
}

export default ShortVideo;
