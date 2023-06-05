import React from "react";
import "./sass/app.scss";
import "./index.css";

import OwlCarousel from "react-owl-carousel2";

function AppDemo() {
  const options = {
    items: 3,
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    rewind: true,
    autoplay: true,
    margin: 0,
    nav: true,
  };

  const events = {
    onDragged: function (event) {},
    onChanged: function (event) {},
  };
  return (
    <div className=" owl-theme">
      <img
        className="item"
        src="http://placehold.it/320x240?text=Slide%200"
        alt=""
      />
      <img
        className="item"
        src="http://placehold.it/320x240?text=Slide%201"
        alt=""
      />
      <img
        className="item"
        src="http://placehold.it/320x240?text=Slide%202"
        alt=""
      />
      <img
        className="item"
        src="http://placehold.it/320x240?text=Slide%203"
        alt=""
      />
      <img
        className="item"
        src="http://placehold.it/320x240?text=Slide%204"
        alt=""
      />
      <img
        className="item"
        src="http://placehold.it/320x240?text=Slide%205"
        alt=""
      />
      <img
        className="item"
        src="http://placehold.it/320x240?text=Slide%206"
        alt=""
      />
      <img
        className="item"
        src="http://placehold.it/320x240?text=Slide%207"
        alt=""
      />
    </div>
    // <div className="carousel">
    //   <div className="carousel__button carousel__button-left">
    //     <button>Left</button>
    //   </div>

    //   <div className="carousel__track-container">
    //     <div className="carousel__track">
    //       <img src="/ChannelImage.png" alt="" />
    //     </div>
    //     <div className="carousel__track">
    //       <img src="/ChannelImage.png" alt="" />
    //     </div>
    //     <div className="carousel__track">
    //       <img src="/ChannelImage.png" alt="" />
    //     </div>
    //   </div>
    //   <div className="carousel__button carousel__button-right">
    //     <button>Right</button>
    //   </div>
    // </div>

    // <div className="carousels">
    //   <OwlCarousel options={options}>
    //     <div>
    //       <img
    //         alt=""
    //         class="item"
    //         src="http://placehold.it/720x900?text=Slide%200"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         alt=""
    //         class="item"
    //         src="http://placehold.it/720x900?text=Slide%200"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         alt=""
    //         class="item"
    //         src="http://placehold.it/720x900?text=Slide%200"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         alt=""
    //         class="item"
    //         src="http://placehold.it/720x900?text=Slide%200"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         alt=""
    //         class="item"
    //         src="http://placehold.it/720x900?text=Slide%200"
    //       />
    //     </div>
    //     <div>
    //       <img
    //         alt=""
    //         class="item"
    //         src="http://placehold.it/720x900?text=Slide%200"
    //       />
    //     </div>
    //   </OwlCarousel>
    // </div>
  );
}

export default AppDemo;
