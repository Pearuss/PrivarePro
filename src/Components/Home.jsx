import React from "react";
import VideoJS from "./VideoJS";
import videojs from "video.js";

import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

function Home() {
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

  const options = {
    items: 1,
    // nav: true,
    rewind: true,
    autoplay: true,
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
    <div>
      <div className="player">
        {/* <OwlCarousel options={options}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="item" key={item}>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
          ))}
        </OwlCarousel> */}
        <OwlCarousel
          className="owl-theme"
          loop
          margin={10}
          items={1}
          nav={true}
          dots={false}
        >
          {[1, 2, 3, 4, 5].map((item) => (
            <div className="item" key={item}>
              <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
            </div>
          ))}
        </OwlCarousel>
        {/* <div className="item">
          <VideoJS options={videoJsOptions} onReady={handlePlayerReady} />
        </div> */}
      </div>
    </div>
  );
}

export default Home;
