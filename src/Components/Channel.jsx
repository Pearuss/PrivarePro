import React from "react";

function Channel() {
  return (
    <div className="channel-page container">
      <div className="channel-page__info">
        <div className="channel-page__info-head">
          <div className="channel-page__info-avatar channel-page__info-live">
            <img src="/ChannelImage.png" alt="" />
            <button className="btn btn--blue">LIVE</button>
          </div>
          <div className="channel-page__info-name">
            <h2>Angel</h2>
            <button className=" btn btn--white">Theo dõi</button>
          </div>
          <div className="channel-page__info-groupBtn">
            <button>
              <img src="/Share.svg" alt="" />
            </button>
            <button>
              <img src="/ThreeDot.svg" alt="" />
            </button>
          </div>
        </div>
        <div className="channel-page__view">
          <div className="channel-page__view-number">
            {" "}
            609<span>Đang theo dõi</span>
          </div>
          <div className="channel-page__view-number">
            {" "}
            905.7K<span>Người theo dõi</span>
          </div>
          <div className="channel-page__view-number">
            {" "}
            12.3Tr<span>Thích</span>
          </div>
        </div>
        <div className="channel-page__des">
          <textarea name="" id="" cols="1" rows="3">
            Flop quá chơi Acc phụ : dammayxanh123
          </textarea>
        </div>
      </div>

      <div className="tab-channel">
        <button className="tab-channel-active">Xem gần đây</button>
        <button>Kênh theo dõi</button>
      </div>

      <div className="list-channel">
        {Array.from(Array(10).keys()).map((item) => (
          <div className="card-channel" key={item}>
            <div className="card-channel__img">
              <img src="/ChannelImage.png" alt="" />
              <div className="card-channel__plate"></div>
            </div>

            <div className="card-channel__info">
              <h3 className="card-channel__title">
                Ngủ một mình x Cô đơn trên sofa (Mashup Ngủ trên sofa) #twice
              </h3>
              <p className="card-channel__view">1,2 Tr lượt xem</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Channel;
