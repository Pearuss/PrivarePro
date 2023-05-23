import React from "react";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";

function Header() {
  return (
    <header className="header">
      <MenuOutlinedIcon className="header__menuIcon" />
      <img
        className="header__logo"
        src="./Logo.png"
        alt=""
        width={154}
        height={56}
      />
      <div className="searchBox">
        <input
          type="text"
          className="header__searchInput"
          placeholder="Tìm kiếm"
        />
        <SearchOutlinedIcon className="header__searchIcon" />
      </div>
      <div className="header__right">
        <button className="header__btnBuy">Mua gói</button>
        <NotificationsOutlinedIcon className="header__bellIcon" />
        <img src="./Ellipse20.png" alt="" />
      </div>
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
