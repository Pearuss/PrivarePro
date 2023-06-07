import React, { useEffect } from "react";
// import 'react-owl-carousel2/style.css';
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";

import "./sass/app.scss";

function AppDemo() {
  // const options = {
  //   items: 1,
  //   nav: true,
  //   rewind: true,
  //   autoplay: true,
  // };
  return (
    <div className="test" style={{ background: "red" }}>
      <OwlCarousel
        className="owl-theme"
        loop
        margin={10}
        items={1}
        nav={true}
        dots={false}
       
      >
        <img
          class="item"
          src="http://placehold.it/320x240?text=Slide%200"
          alt=""
        />
        <img
          class="item"
          src="http://placehold.it/320x240?text=Slide%201"
          alt=""
        />
        <img
          class="item"
          src="http://placehold.it/320x240?text=Slide%202"
          alt=""
        />
        <img
          class="item"
          src="http://placehold.it/320x240?text=Slide%203"
          alt=""
        />
        <img
          class="item"
          src="http://placehold.it/320x240?text=Slide%204"
          alt=""
        />
        <img
          class="item"
          src="http://placehold.it/320x240?text=Slide%205"
          alt=""
        />
        <img
          class="item"
          src="http://placehold.it/320x240?text=Slide%206"
          alt=""
        />
        <img
          class="item"
          src="http://placehold.it/320x240?text=Slide%207"
          alt=""
        />
      </OwlCarousel>
    </div>
  );
}

export default AppDemo;
