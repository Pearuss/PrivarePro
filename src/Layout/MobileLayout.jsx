import { Backdrop } from "@mui/material";
import { useState } from "react";
import { Outlet } from "react-router-dom";
import SearchTab from "../Components/SearchTab";

const MobileLayout = () => {
  const [openMenu, setOpenMenu] = useState(true);
  const [showSearchTab, setShowSearchTab] = useState(false);

  const menuOptions = [
    {
      text: "TV Show",
      icon: "options/Tvshow.svg",
    },
    {
      text: "Phim",
      icon: "options/Phim.svg",
    },
    {
      text: "Nhạc",
      icon: "options/Nhac.svg",
    },
    {
      text: "eSports",
      icon: "options/Esport.svg",
    },
    {
      text: "Kids",
      icon: "options/Kids.svg",
    },
    {
      text: "Thể thao",
      icon: "options/Sport.svg",
    },
  ];
  return (
    <div className="wrapper">
      <Backdrop
        sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={openMenu}
        onClick={() => setOpenMenu(false)}
      >
        <div className="menu-backdrop">
          <img src="Delete.svg" alt="" className="menu-backdrop__close-btn" />
          <div className="menu-backdrop-btn">
            <button className="btn btn--red">Mua gói</button>
            <button className="btn btn--blue">Đăng nhập</button>
          </div>
          <div className="menu-backdrop__home">
            <img src="taskbar/home.svg" alt="" />
            Trang chủ
          </div>
          <div className="menu-backdrop__options">
            <ul className="options__list">
              {menuOptions.map(({ text, icon }) => (
                <li key={text} className="options_item">
                  <img className="options__icon" src={icon} alt="" />
                  <p className="options__des">{text}</p>
                </li>
              ))}
            </ul>
            <div className="sidebar__line"></div>
          </div>
          <div className="menu-backdrop__info">
            <div className="menu-backdrop__sub">
              <img src="circle.svg" alt="" />
              Cài đặt
            </div>
            <div className="menu-backdrop__sub">
              <img src="circle.svg" alt="" />
              Giới thiệu
            </div>
            <div className="menu-backdrop__sub">
              <img src="circle.svg" alt="" />
              Điểu khoản dịch vụ
            </div>
            <div className="menu-backdrop__sub">
              <img src="circle.svg" alt="" />
              Liên hệ
            </div>
          </div>

          <div className="menu-backdrop__footer">
            <p className="menu-backdrop__footer-head">Bản quyền thuộc</p>
            <img
              src="Mobifone.png"
              alt=""
              className="menu-backdrop__footer-img"
            />
            <p className="menu-backdrop__footer-des">
              <span>Cơ quan chủ quản:</span> Trung tâm Dịch vụ Số MobiFone – Chi
              nhánh Tổng Công ty Viễn thông MobiFone.
            </p>
            <p className="menu-backdrop__footer-number">
              <span>Điện thoại:</span> 1800 1090
            </p>
          </div>
        </div>
      </Backdrop>
      {showSearchTab && <SearchTab setShowSearchTab={setShowSearchTab} />}

      <div className="menu-bar">
        <img
          src="/Menu.svg"
          alt=""
          className="menu-bar__menuIcon"
          onClick={() => setOpenMenu(true)}
        />
        <ul className="menu-bar__tab">
          <li>Dành cho bạn</li>
          <li>Đang theo dõi</li>
        </ul>
        <img
          src="/Search.svg"
          alt=""
          className="menu-bar__searchIcon"
          onClick={() => setShowSearchTab(true)}
        />
      </div>
      <Outlet />
      <div className="taskbar">
        <div className="taskbar__list">
          <div className="taskbar__item">
            <img src="/taskbar/home.svg" alt="" />
            <h4>Trang chủ</h4>
          </div>
          <div className="taskbar__item">
            <img src="/taskbar/love.svg" alt="" />
            <h4>Yêu thích</h4>
          </div>
          <div className="taskbar__item">
            <img src="/taskbar/bell.svg" alt="" />
            <h4>Thông báo</h4>
          </div>
          <div className="taskbar__item">
            <img src="/taskbar/profile.svg" alt="" />
            <h4>Cá nhân</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileLayout;
