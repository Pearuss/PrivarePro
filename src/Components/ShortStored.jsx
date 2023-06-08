import React, { useState } from "react";

function ShortStored() {
  const [loveTab, setLoveTab] = useState(true);
  return (
    <div className="short-loved">
      <div className="short-loved__header">
        <div
          onClick={() => setLoveTab(true)}
          className={
            loveTab
              ? "short-loved__title short-loved__title--red"
              : "short-loved__title"
          }
        >
          <img src="heart.svg" alt="" />
          <span>Đã thích</span>
        </div>
        <div
          onClick={() => setLoveTab(false)}
          className={
            loveTab
              ? "short-loved__title"
              : "short-loved__title short-loved__title--red"
          }
        >
          <img src="saved.svg" alt="" />
          <span>Lưu trữ</span>
        </div>
      </div>
      <div className="list-short">
        {[1, 2, 3, 4, 5, 6, 7].map((item) => (
          <div className="list-short__item" key={item}>
            <img src="VideoDemo.png" alt="video đã thích" />
            <h4 className="list-short__des">
              ngủ một mình X cô đơn trên sopha sopha sopha
            </h4>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ShortStored;
