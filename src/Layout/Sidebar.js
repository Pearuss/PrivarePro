import React, { useState } from "react";

function Sidebar() {
  const [showMenu, setShowMenu] = useState(true);
  const menuItems = [
    {
      text: "Dành cho bạn",
      icon: "icons/Home.svg",
    },
    {
      text: "Người theo dõi",
      icon: "icons/People.svg",
    },
    {
      text: "Trực tiếp",
      icon: "icons/Live.svg",
    },
    {
      text: "Yêu thích",
      icon: "icons/Love.svg",
    },
  ];
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
    <nav className={showMenu ? "sidebar show-sidebar" : "sidebar"}>
      <div className="menu">
        {menuItems.map(({ text, icon }) => (
          <a
            key={text}
            className={showMenu ? "menu__item menu__show" : "menu__item"}
            href="/"
          >
            <img className="menu__item-icon" src={icon} alt="" />
            <p className="menu__des">{text}</p>
          </a>
        ))}
        <div className="sidebar__line"></div>
      </div>
      {showMenu && (
        <div className="login">
          <p className="login__des">
            Hãy đăng nhập để thích video, bình luận và đăng ký kênh.
          </p>
          <button className="login__button">Đăng nhập</button>
          <div className="sidebar__line"></div>
        </div>
      )}
      {showMenu && (
        <div className="channels-pri">
          <h3 className="channels-pri__title">Kênh đề xuất</h3>
          <div className="channel">
            <img
              src="/Avatar.png"
              alt=""
              className="channel__avatar"
              width={40}
              height={40}
            />
            <div className="channel__des">
              <p className="channel__name">finDmusic</p>
              <div className="channel__follow">24k theo dõi</div>
            </div>
          </div>
          <div className="channel">
            <img
              src="/Avatar.png"
              alt=""
              className="channel__avatar"
              width={40}
              height={40}
            />
            <div className="channel__des">
              <p className="channel__name">finDmusic</p>
              <div className="channel__follow">24k theo dõi</div>
            </div>
          </div>
          <p className="channels-pri__view">Xem tất cả</p>
          <div className="sidebar__line"></div>
        </div>
      )}
      {showMenu && (
        <div className="discovery">
          <h3 className="discovery__title">Khám phá</h3>
          <ul className="discovery__tags">
            <li className="discovery__tag"># suthatla</li>
            <li className="discovery__tag"># mackedoi</li>
            <li className="discovery__tag"># suthatla</li>
            <li className="discovery__tag"># sansangthaydoi</li>
          </ul>

          <div className="sidebar__line"></div>
        </div>
      )}
      {showMenu && (
        <div className="service">
          <h3 className="service__title">Dịch vụ khác của Motion</h3>
          <ul className="service__options">
            {menuOptions.map(({ text, icon }) => (
              <li key={text} className="service__option">
                <img className="service__icon" src={icon} alt="" />
                <p className="service__des">{text}</p>
              </li>
            ))}
          </ul>
          <div className="sidebar__line"></div>
        </div>
      )}
      {showMenu && (
        <div className="response">
          <button className="response__item">
            <img className="response__icon" src="/Question.svg" alt="" />
            <p className="response__des">Trợ giúp</p>
          </button>
          <button className="response__item">
            <img className="response__icon" src="/Response.svg" alt="" />
            <p className="response__des">Gửi ý kiến phản hồi</p>
          </button>
          <div className="sidebar__line"></div>
        </div>
      )}
      {showMenu && (
        <div className="info">
          <p className="info__title">Bản quyền thuộc</p>
          <img src="/Mobifone.png" className="info__img" alt="" />
          <p className="info__des">
            <span>Cơ quan chủ quản: </span>Trung tâm Dịch vụ Số MobiFone – Chi
            nhánh Tổng Công ty Viễn thông MobiFone.
          </p>
          <p className="info__number">
            <span>Điện thoại: </span> 1800 1090
          </p>
          <p className="info__number">
            <span>Email: </span> mobion-cskh@mobifone.vn
          </p>
          <div className="info__follow">
            <p>Kênh theo dõi</p>
            <img src="/Facebook.svg" className="info__icon" alt="" />
            <img src="/Message.svg" className="info__icon" alt="" />
          </div>
          <div className="info__download">
            <img src="/Download.png" className="" alt="" />
          </div>
        </div>
      )}
    </nav>
  );
}

export default Sidebar;
