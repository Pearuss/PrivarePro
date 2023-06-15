import React from "react";

function Profile() {
  return (
    <div className="profile">
      <div className="notification__header">
        <img
          src="Menu.svg"
          alt=""
          className="notification__header-menu"
          // onClick={() => setOpenMenu(true)}
        />
        <h5>Đám mây xanh</h5>
        <img src="view-all.svg" alt="" className="notification__header-view" />
      </div>
      <div className="profile__info">
        <div className="profile__info__name">
          <img src="/ChannelImage.png" alt="" width={96} height={96} />
          <h4>Đám mây xanh</h4>
        </div>
        <div className="profile__info__follow">
          <div className="profile__info__follower">
            <p>609</p>
            <p>Đang theo dõi</p>
          </div>
          <div className="profile__info__follower">
            <p>905,7K</p>
            <p>Người theo dõi</p>
          </div>
        </div>
        <button className="profile__info__editBtn">
          <img src="EditIcon.svg" alt="" /> Sửa hồ sơ
        </button>
        <p className="profile__info__des">www.facebook.com/id</p>
      </div>
      <div className="profile__tab">
        <span>Xem gần đây</span>
        <span>Kênh theo dõi</span>
      </div>
      <div className="profile__list">
        {Array.from(Array(10).keys()).map((item) => (
          <div className="profile__item" key={item}>
            <div className="profile__item__info">
              <img src="/ChannelImage.png" alt="" className="profile__item__img" />
              <div className="profile__item__des"></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Profile;
