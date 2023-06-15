import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

export default function MenuLayout({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

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
    <Dialog
      open={open}
      TransitionComponent={Transition}
      hideBackdrop
      keepMounted
      onClose={handleClose}
      PaperProps={{
        sx: {
          minHeight: "100vh",
          minWidth: "260px",
          background: "#090B12",
          position: "absolute",
          top: "0",
          left: "0",
          margin: "0",
        },
      }}
    >
      <div className="menu-backdrop">
        <img
          src="Delete.svg"
          alt=""
          className="menu-backdrop__close-btn"
          onClick={handleClose}
        />
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
            Khuyến Mãi
          </div>
          {/* <div className="menu-backdrop__sub">
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
          </div> */}
        </div>

        <div className="menu-backdrop__footer">
          <p className="menu-backdrop__footer-head">Bản quyền thuộc</p>
          <img
            src="Mobifone.png"
            alt=""
            className="menu-backdrop__footer-img"
          />
          {/* <p className="menu-backdrop__footer-des">
            <span>Cơ quan chủ quản:</span> Trung tâm Dịch vụ Số MobiFone – Chi
            nhánh Tổng Công ty Viễn thông MobiFone.
          </p>
          <p className="menu-backdrop__footer-number">
            <span>Điện thoại:</span> 1800 1090
          </p> */}
        </div>
      </div>
    </Dialog>
  );
}
