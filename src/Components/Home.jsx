import React, { useState } from "react";
import VideoJS from "./VideoJS";
import videojs from "video.js";
import CommentDialog from "../Dialogs/CommentDialog";
import ShareDialog from "../Dialogs/ShareDialog";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";

function Home() {
  const playerRef = React.useRef(null);
  const [showComment, setShowComment] = useState(false);
  const [showShare, setShowShare] = useState(false);

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
  return (
    <div className="home">
      <Swiper
        direction="vertical"
        slidesPerView="1"
        mousewheel={true}
        className="mySwiper"
      >
        {[1, 2, 3, 4].map((item) => (
          <SwiperSlide key={item}>
            <div className="player__item">
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
              <div className="home__feature">
                <div className="home__feature__group">
                  <button className="home__feature__btn">
                    <img src="/LoveIcon.svg" alt="" />
                  </button>
                  <p className="home__feature__number">1,1 N</p>
                </div>
                <div className="home__feature__group">
                  <button
                    className="home__feature__btn"
                    onClick={() => {
                      setShowComment(true);
                    }}
                  >
                    <img src="/Comment.svg" alt="" />
                  </button>
                  <p className="home__feature__number">123</p>
                </div>
                <div className="home__feature__group">
                  <button className="home__feature__btn">
                    <img src="/Save.svg" alt="" />
                  </button>
                  <p className="home__feature__number">Lưu</p>
                </div>
                <div className="home__feature__group">
                  <button
                    className="home__feature__btn"
                    onClick={() => setShowShare(true)}
                  >
                    <img src="/Share.svg" alt="" />
                  </button>
                  <p className="home__feature__number">Chia sẻ</p>
                </div>
                <div className="home__feature__group">
                  <button className="home__feature__btn">
                    <img src="muted.svg" alt="" />
                  </button>
                </div>
                <div className="home__feature__group">
                  <button className="home__feature__btn">
                    <img src="/Dot.svg" alt="" />
                  </button>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <CommentDialog open={showComment} setOpen={setShowComment} />
      <ShareDialog open={showShare} setOpen={setShowShare} />
    </div>
  );
}

export default Home;
