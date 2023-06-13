import React, { useState } from "react";

function SearchTab({ setShowSearchTab }) {
  const [tab, setTab] = useState("all");
  const [inputText, setInputText] = useState("");
  return (
    <div className="search-tab">
      <div className="search-tab__header">
        <img
          src="/ArrowLight.svg"
          alt=""
          className="search-tab__backArrow"
          onClick={() => setShowSearchTab(false)}
        />
        <div className="search-tab__search">
          <img src="Search.svg" alt="" />
          <input
            type="text"
            placeholder="Nhập từ khóa"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
          />
        </div>
        <div className="search-tab__text">Tìm kiếm</div>
      </div>
      <ul className="search-tab__tabs">
        <li
          className="search-tab__tabs-item"
          style={{ borderBottom: "2px solid #EC2227" }}
          onClick={() => setTab("all")}
        >
          Tất cả
        </li>
        <li className="search-tab__tabs-item" onClick={() => setTab("video")}>
          Video
        </li>
        <li className="search-tab__tabs-item" onClick={() => setTab("channel")}>
          Kênh
        </li>
        <li className="search-tab__tabs-item" onClick={() => setTab("tags")}>
          HashTag
        </li>
      </ul>
      {inputText === "" ? (
        <div className="search-tab__result">
          <div className="search-tab__history">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
              <div className="search-tab__item">
                <img src="Clock.svg" alt="" className="search-tab__clockIcon" />
                <span>Ngủ một mình</span>
                <img
                  src="CloseGray.svg"
                  alt=""
                  className="search-tab__deleteIcon"
                />
              </div>
            ))}
          </div>
          <div className="search-tab__channel">
            <h4>Kênh</h4>
            {[1, 2, 3].map((item) => (
              <div className="search-tab__item">
                <img src="Avatar.png" alt="" />
                <span>Evondev</span>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="">
          {" "}
          {(tab === "all" || tab === "video") && (
            <div className="search-tab__all">
              {[1, 2, 3, 4].map((item) => (
                <div className="search-tab__all__item">
                  <div className="search-tab__all__img">
                    <img
                      src="/ChannelImage.png"
                      alt=""
                      className="search-tab__all__mainImg"
                    />
                    <div className="search-tab__all__user">
                      <img
                        src="/Avatar.png"
                        alt=""
                        className="search-tab__all__avatar"
                        width={24}
                        height={24}
                      />
                      <h4 className="search-tab__all__name">Angel</h4>
                    </div>
                  </div>
                  <div className="search-tab__all__title">
                    Tiêu đề video không giới hạn tối đa dòng, viết thêm cho dài
                    dài dài thêm cho đủ hai dòng
                  </div>
                  <div className="search-tab__all__view">2.1N lượt xem</div>
                </div>
              ))}
            </div>
          )}
          {(tab === "all" || tab === "channel") && (
            <div className="search-tab__channel">
              <div className="search-tab__channel__header">
                <h5>Kênh</h5>
                <div className="search-tab__channel__more">
                  <span>Xem thêm</span>
                  <img src="ArrowLight.svg" alt="" />
                </div>
              </div>
              <div className="search-tab__channel__itemList">
                {[1, 2, 3, 4].map((item) => (
                  <div className="search-tab__channel__item">
                    <img
                      src="/ChannelImage.png"
                      alt=""
                      width={40}
                      height={40}
                      className="search-tab__channel__img"
                    />
                    <div className="search-tab__channel__user">
                      <h5 className="search-tab__channel__name">Angel</h5>
                      <p className="search-tab__channel__view">24K theo dõi</p>
                    </div>
                    <button className="search-tab__channel__follow">
                      Theo dõi
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
          {(tab === "all" || tab === "tags") && (
            <div className="search-tab__tags">
              <div className="search-tab__tags__header">
                <h5>HashTag</h5>
                <div className="search-tab__tags__more">
                  <span>Xem thêm</span>
                  <img src="ArrowLight.svg" alt="" />
                </div>
              </div>
              <div className="search-tab__tags__itemList">
                {[1, 2, 3, 4].map((item) => (
                  <div className="search-tab__tags__item"># suthatla</div>
                ))}
              </div>
            </div>
          )}
          {(tab === "all" || tab === "video") && (
            <div className="search-tab__all">
              {[1, 2, 3, 4].map((item) => (
                <div className="search-tab__all__item">
                  <div className="search-tab__all__img">
                    <img
                      src="/ChannelImage.png"
                      alt=""
                      className="search-tab__all__mainImg"
                    />
                    <div className="search-tab__all__user">
                      <img
                        src="/Avatar.png"
                        alt=""
                        className="search-tab__all__avatar"
                        width={24}
                        height={24}
                      />
                      <h4 className="search-tab__all__name">Angel</h4>
                    </div>
                  </div>
                  <div className="search-tab__all__title">
                    Tiêu đề video không giới hạn tối đa dòng, viết thêm cho dài
                    dài dài thêm cho đủ hai dòng
                  </div>
                  <div className="search-tab__all__view">2.1N lượt xem</div>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default SearchTab;
