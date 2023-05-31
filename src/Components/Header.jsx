import React, { useRef, useState } from "react";
import { useClickOutside } from "@react-hookz/web/esm/useClickOutside";
import useToggle from "../hooks/useToggle";
import { Link } from "react-router-dom";
import CommonDialog from "../Dialogs/CommonDialog";
import ChangePassword from "./ChangePassword";

function Header() {
  const notificationRef = useRef(null);
  const profileRef = useRef(null);
  const searchRef = useRef(null);

  const [showNotification, setShowNotification] = useToggle(false);
  const [showProfile, setShowProfile] = useToggle(false);
  const [showSearchBox, setShowSearchBox] = useToggle(false);
  const [showChangePassword, setShowChangePassword] = useState(false);

  useClickOutside(notificationRef, () => {
    setShowNotification();
  });
  useClickOutside(profileRef, () => {
    setShowProfile();
  });
  useClickOutside(searchRef, () => {
    setShowSearchBox();
  });

  const menuProfile = [
    {
      text: "Xem hồ sơ",
      icon: "profile-menu/profile.svg",
      url: "/profile",
    },
    {
      text: "Gói cước",
      icon: "profile-menu/package.svg",
      url: "/profile",
    },
    {
      text: "Trợ giúp",
      icon: "profile-menu/help.svg",
      url: "/profile",
    },
    {
      text: "Gửi ý kiến phản hồi",
      icon: "profile-menu/response.svg",
      url: "/profile",
    },
    {
      text: "Đổi mật khẩu",
      icon: "profile-menu/password.svg",
      url: "/none",
    },
    {
      text: "Đăng xuất",
      icon: "profile-menu/logout.svg",
      url: "/profile",
    },
  ];
  return (
    <header className="header">
      <img src="Menu.svg" alt="menu icon" className="header__menuIcon" />
      <img
        className="header__logo"
        src="./Logo.png"
        alt=""
        width={154}
        height={56}
      />
      <div className="searchBox" onClick={setShowSearchBox}>
        <input
          type="text"
          className="header__searchInput"
          placeholder="Tìm kiếm"
        />
        <img
          src="Search.svg"
          alt="search icon"
          className="header__searchIcon"
        />
        {showSearchBox && (
          <div ref={searchRef} className="search-box">
            <div className="search-box__history">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="search-box__item">
                  <img src="/Clock.svg" alt="clock icon" />
                  <p className="search-box__text">Ngủ một mình</p>
                  <span className="search-box__delete">Xóa</span>
                </div>
              ))}
            </div>
            <p className="search-box__trend-title">Top xu hướng</p>
            <div className="search-box__trend">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="search-box__item">
                  <img src="/Trend.svg" alt="trend icon" />
                  <p className="search-box__text">Mixi</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
      <div className="header__right">
        <button className="header__btnBuy btn btn--blue">Mua gói</button>
        <img
          src="/bell.svg"
          alt=""
          className="header__bellIcon"
          onClick={setShowNotification}
        />
        {showNotification && (
          <div ref={notificationRef} className="notification">
            <div className="notification__header">
              <div className="notification__title">Thông báo</div>
              <img
                src="/view-all.svg"
                alt=""
                className="notification__view-all"
                style={{ cursor: "pointer" }}
              />
            </div>
            <div className="notification__list">
              {[1, 2, 3, 4, 5].map((item) => (
                <div key={item} className="notification__item">
                  <div className="notification__viewed"></div>
                  <img
                    src="Avatar.png"
                    alt=""
                    className="notification__user-avatar"
                    width={48}
                    height={48}
                  />
                  <div className="notification__content">
                    <h4>Tiêu đề video không giới hạn tối đa dòng</h4>
                    <p>3 giờ trước</p>
                  </div>
                  <img
                    src="VideoDemo.png"
                    alt=""
                    className="notification__post"
                  />
                  <img
                    src="ThreeDot.svg"
                    alt=""
                    className="notification__three-dot"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
        <img
          onClick={setShowProfile}
          style={{ cursor: "pointer" }}
          src="./Ellipse20.png"
          alt=""
        />
        {showProfile && (
          <div ref={profileRef} className="profile-menu">
            <div className="profile-menu__header">
              <img
                src="./Ellipse20.png"
                alt=""
                className="profile-menu__avatar"
                style={{ cursor: "pointer" }}
              />
              <div className="profile-menu__username">Hi, Thế Anh</div>
            </div>
            <div className="profile-menu__list">
              {menuProfile.map((item) =>
                item.url === "/none" ? (
                  <div
                    key={item.text}
                    className="profile-menu__item"
                    onClick={() => {
                      setShowChangePassword(true);
                    }}
                  >
                    <img
                      src={item.icon}
                      alt=""
                      className="profile-menu__icon"
                    />
                    <p className="profile-menu__text">{item.text}</p>
                  </div>
                ) : (
                  <Link to={item.url}>
                    <div key={item.text} className="profile-menu__item">
                      <img
                        src={item.icon}
                        alt=""
                        className="profile-menu__icon"
                      />
                      <p className="profile-menu__text">{item.text}</p>
                    </div>
                  </Link>
                )
              )}
            </div>
          </div>
        )}
      </div>
      <div className="header__line"></div>
      <CommonDialog
        open={showChangePassword}
        setOpen={setShowChangePassword}
        title="Đổi mật khẩu"
        submitText="Đổi mật khẩu"
      >
        <ChangePassword />
      </CommonDialog>
    </header>
  );
}

export default Header;
