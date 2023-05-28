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
        <button className="header__btnBuy btn btn--blue">Mua gói</button>
        <img src="/bell.svg" alt="" className="header__bellIcon" />
        <img src="./Ellipse20.png" alt="" />
        <div className="notification">
          <div className="notification__header">
            <div className="notification__title">Thông báo</div>
            <img
              src="/ThreeDot.svg"
              alt=""
              className="notification__view-all"
            />
          </div>
          <div className="notification__list">
            <div className="notification__item">
              <div className="notification__viewed"></div>
              <img
                src="Avatar.png"
                alt=""
                className="notification__user-avatar"
              />
              <div className="notification__content">
                <h4>Tiêu đề video không giới hạn tối đa dòng</h4>
                <p>3 giờ trước</p>
              </div>
              <img
                src="User.png"
                alt=""
                width={80}
                height={45}
                className="notification__post"
              />
              <img
                src="ThreeDot.svg"
                alt=""
                className="notification__three-dot"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="header__line"></div>
    </header>
  );
}

export default Header;
