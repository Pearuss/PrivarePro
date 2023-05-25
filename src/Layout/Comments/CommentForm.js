import React from "react";

function CommentForm() {
  return (
    <div className="chat__message">
      <input
        type="text"
        className="chat__message-input"
        placeholder="Thêm bình luận..."
      />
      <img src="/Emo.svg" alt="" className="chat__message-emo" />
      <img src="/Send.svg" alt="" className="chat__message-send" />
    </div>
  );
}

export default CommentForm;
