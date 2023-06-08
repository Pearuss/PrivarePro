import React, { useEffect, useState } from "react";
import ShareDialog from "../Dialogs/ShareDialog";
import { useKeyboardEvent } from "@react-hookz/web/esm/useKeyboardEvent";
import useToggle from "../hooks/useToggle";
import VideoJS from "./VideoJS";
import videojs from "video.js";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import LiveChat from "./LiveChat";

function ShortLive() {
  const [showLiveChat, setShowLiveChat] = useState(true);
  const [showShare, setShowShare] = useState(false);
  const [followed, setFollowed] = useToggle(false);

  const nextVideoHandler = () => {
    document.querySelector(".owl-next").click();
  };
  const preVideoHandler = () => {
    document.querySelector(".owl-prev").click();
  };

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
      if (ev.key === " ") document.querySelector(".owl-next").click();
      return;
    },
    [],
    { eventOptions: { passive: true } }
  );
  return (
    <div className="short-video ">
      <div className="test">
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items={1}
          nav={true}
          dots={false}
        >
          {[1, 2, 3, 4].map((item) => (
            <div className="card item" key={item}>
              <div className="card__video">
                <div className="player">
                  <VideoJS
                    options={videoJsOptions}
                    onReady={handlePlayerReady}
                  />
                </div>
                <div className="card__header">
                  <div className="live-info">
                    <button className="btn btn--red">TRỰC TIẾP</button>
                    <img src="person-live.svg" alt="person view live" />
                    <span>725</span>
                  </div>
                  {/* <img src="muted.svg" alt="" className="card__speaker" /> */}
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
                        className={
                          followed ? "btn btn--gray" : "btn btn--white"
                        }
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
              {showLiveChat && <LiveChat setShowLiveChat={setShowLiveChat} />}
              {/* {true && <ShortStored />} */}
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
                      setShowLiveChat(true);
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
        </OwlCarousel>
      </div>

      <div className="short-video__redirect-btn">
        <img src="/ArrowUp.svg" alt="" onClick={preVideoHandler} />
        <img src="/ArrowLight.svg" alt="" onClick={nextVideoHandler} />
      </div>
      <ShareDialog open={showShare} setOpen={setShowShare} />
    </div>
  );
}

export default ShortLive;
