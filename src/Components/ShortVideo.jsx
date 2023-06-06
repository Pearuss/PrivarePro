import React, { useEffect, useState } from "react";
import LiveChat from "./LiveChat";
import CommentDialog from "../Dialogs/CommentDialog";
import ShareDialog from "../Dialogs/ShareDialog";
import { useKeyboardEvent } from "@react-hookz/web/esm/useKeyboardEvent";
import useToggle from "../hooks/useToggle";
import { useLocation } from "react-router-dom";
import ShortStored from "./ShortStored";
import VideoJS from "./VideoJS";
import videojs from "video.js";

function ShortVideo() {
  const [showComment, setShowComment] = useState(false);
  const [showLiveChat, setShowLiveChat] = useState(false);
  const [showShare, setShowShare] = useState(false);
  const [followed, setFollowed] = useToggle(false);

  const location = useLocation();
  const isLive = location.pathname === "/live" || false;
  const isLove = location.pathname === "/yeu-thich" || false;

  useEffect(() => {
    const track = document.querySelector(".short-video");

    const slides = Array.from(track.children);

    const nextButton = document.querySelector(".short-video__btn--next");
    const preBtton = document.querySelector(".short-video__btn--pre");

    // const setSlidePosi
    const slideTop = slides[0].getBoundingClientRect().height;
    const getSlidePosition = (slide, index) => {
      const numTop = slideTop * index;
      slide.style.top = numTop + "px";
    };
    slides.forEach(getSlidePosition);

    const moveToSlide = (track, currentSlide, targetSlide) => {
      // console.log("translateY(-cal(" + targetSlide.style.top + " + 40px))");
      track.style.transform = "translateY(-" + targetSlide.style.top + ")";
      currentSlide.classList.remove("current-slide");
      targetSlide.classList.add("current-slide");
    };

    nextButton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.nextElementSibling;
      if (!nextSlide) return;
      moveToSlide(track, currentSlide, nextSlide);
    });
    preBtton.addEventListener("click", (e) => {
      const currentSlide = track.querySelector(".current-slide");
      const nextSlide = currentSlide.previousElementSibling;
      if (!nextSlide) return;
      moveToSlide(track, currentSlide, nextSlide);
    });
  }, []);

  //

  const playerRef = React.useRef(null);

  const videoJsOptions = {
    autoplay: true,
    controls: true,
    responsive: true,
    liveui: true,
    fluid: true,
    sources: [
      {
        src: "/video3.mp4",
        type: "video/mp4",
      },
    ],
  };

  const handlePlayerReady = (player) => {
    playerRef.current = player;

    // You can handle player events here, for example:
    player.on("waiting", () => {
      videojs.log("player is waiting");
    });

    player.on("dispose", () => {
      videojs.log("player will dispose");
    });
  };
  //

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
      if (ev.key === " ")
        document.querySelector(".short-video__btn--next").click();
    },
    [],
    { eventOptions: { passive: true } }
  );
  return (
    <>
      <div className="short-video">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item, index) => (
          <div
            className={index === 0 ? "card current-slide" : "card"}
            key={item}
          >
            <div className="card__video">
              <div className="player">
                <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
              </div>
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
              {false && (
                <div className="card__info">
                  <div className="card__user">
                    <img
                      className="card__user-avatar"
                      src="/Avatar.png"
                      alt=""
                    />
                    <div className="card__user-name">finDmusic</div>
                    <button
                      className={followed ? "btn btn--gray" : "btn btn--white"}
                      onClick={setFollowed}
                    >
                      {followed ? "Đã theo dõi" : "Theo dõi"}
                    </button>
                  </div>
                  <div className="card__des">
                    Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa)
                    #short #beauty #girl
                  </div>
                </div>
              )}
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
        ))}
      </div>
      <div className="short-video__redirect-btn">
        <img src="/ArrowUp.svg" alt="" className="short-video__btn--pre" />
        <img src="/ArrowLight.svg" alt="" className="short-video__btn--next" />
      </div>
      <CommentDialog open={showComment} setOpen={setShowComment} />
      <ShareDialog open={showShare} setOpen={setShowShare} />
    </>
  );
}

export default ShortVideo;
