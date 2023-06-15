import React from "react";

function Love() {
  return (
    <div className="love-video">
      <div className="notification__header">
        <img
          src="Menu.svg"
          alt=""
          className="notification__header-menu"
          // onClick={() => setOpenMenu(true)}
        />
        <h5>Yêu thích</h5>
        <img src="search.svg" alt="" className="notification__header-view" width={24} height={24} />
      </div>

      <div className="profile__tab">
        <span>
          {/* <img
            src="view-all.svg"
            alt=""
            className="notification__header-view"
          /> */}
          Đã thích
        </span>
        <span>
          {/* <img
            src="view-all.svg"
            alt=""
            className="notification__header-view"
          /> */}
          Lưu trữ
        </span>
      </div>

      <div className="profile__list">
        {Array.from(Array(10).keys()).map((item) => (
          <div className="profile__item" key={item}>
            <div className="profile__item__info">
              <img
                src="/ChannelImage.png"
                alt=""
                className="profile__item__img"
              />
              <div className="profile__item__des"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Love;
