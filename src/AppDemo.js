import React from "react";
import OwlCarousel from "react-owl-carousel2";
// import 'react-owl-carousel2/style.css';

import "./sass/app.scss";

function AppDemo() {
  const options = {
    items: 1,
    nav: true,
    rewind: true,
    autoplay: true,
  };
  return (
    <div className="test">
      <OwlCarousel options={options}>
        <div className="item">
          <img src="ChannelImage.png" alt="The Last of us" />
        </div>
        <div className="item">
          <img src="ChannelImage.png" alt="GTA V" />
        </div>
        <div className="item">
          <img src="ChannelImage.png" alt="Mirror Edge" />
        </div>
      </OwlCarousel>
    </div>
  );
}

export default AppDemo;
