import React from "react";

function ChangePassword() {
  return (
    <div className="password-popup">
      <div className="password-popup__info">
        <div className="password-popup__title">Mật khẩu hiện tại</div>
        <input type="password" className="password-popup__input" value={"Test"} />
      </div>
      <div className="password-popup__info">
        <div className="password-popup__title">Mật khẩu mới</div>
        <input type="password" className="password-popup__input" value={"Test"} />
      </div>
      <div className="password-popup__info">
        <div className="password-popup__title">Xác nhận mật khẩu mới</div>
        <input type="password" className="password-popup__input" value={"Test"} />
      </div>
    </div>
  );
}

export default ChangePassword;
