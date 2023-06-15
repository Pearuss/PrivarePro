import { Backdrop } from "@mui/material";
import { useState } from "react";
import { Link, Outlet } from "react-router-dom";
import SearchTab from "../Components/SearchTab";
import NotificationDialog from "../Dialogs/NotificationDialog";
import MenuLayout from "../Dialogs/MenuLayout";

const MobileLayout = ({ showMenuBar = false }) => {
  const [openMenu, setOpenMenu] = useState(true);
  const [showSearchTab, setShowSearchTab] = useState(false);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="wrapper">
      {showSearchTab && <SearchTab setShowSearchTab={setShowSearchTab} />}

      {showMenuBar && (
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
      )}
      <Outlet />
      <div className="taskbar">
        <div className="taskbar__list">
          <Link to={"/"} className="taskbar__item">
            <img src="/taskbar/Home.svg" alt="" />
            <h4>Trang chủ</h4>
          </Link>

          <Link to={"/love"} className="taskbar__item">
            <img src="/taskbar/Love.svg" alt="" />
            <h4>Yêu thích</h4>
          </Link>

          <div
            className="taskbar__item"
            onClick={() => setShowNotification(true)}
          >
            <img
              src="/taskbar/Bell.svg"
              alt=""
              style={{ opacity: showNotification ? "1" : ".4" }}
            />
            <h4>Thông báo</h4>
          </div>

          <Link to={"/profile"} className="taskbar__item">
            <img src="/taskbar/Person.svg" alt="" />
            <h4>Cá nhân</h4>
          </Link>
        </div>
      </div>
      <NotificationDialog
        open={showNotification}
        setOpen={setShowNotification}
        setOpenMenu={setOpenMenu}
      />
      <MenuLayout open={openMenu} setOpen={setOpenMenu} />
    </div>
  );
};

export default MobileLayout;
