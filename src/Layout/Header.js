import React from "react";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  BellIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
    <header className="header">
      <Bars3Icon className="header__menuIcon" />
      <img className="header__logo" src="./Logo.png" alt="" width={154} height={56} />
      <div className="searchBox">
        <input type="text" className="header__searchInput" placeholder="Tìm kiếm" />
        <MagnifyingGlassIcon className="header__searchIcon" />
      </div>
      <div className="header__right">
        <button className="header__btnBuy">Mua gói</button>
        <BellIcon className="header__bellIcon" />
        <img src="./Ellipse20.png" alt="" />
      </div>
    </header>
  );
}

export default Header;
