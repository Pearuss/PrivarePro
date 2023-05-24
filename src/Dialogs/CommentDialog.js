import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Comments from "../Layout/Comments/Comments";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="comment-dialog"
      sx={{
        ".MuiPaper-root": {
          height: "calc(100% - 200px)",
          minWidth: "720px",
          background: "#13151f",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
        },
      }}
      style={{ maxHeight: "!873px" }}
    >
      <div className="box-comment">
        <div className="box-comment__head">
          <div className="box-comment__title">
            Bình luận<span>124</span>
          </div>
          <img src="/SortIcon.svg" alt="" className="box-comment__sortIcon" />
          <img src="/DeleteIcon.svg" alt="" onClick={handleClose} />
        </div>
        <div className="box-comment__box">
          <Comments currentUserId={1} />
          <div className="box-comment__line"></div>
        </div>
        <div className="chat__message">
          <input
            type="text"
            className="chat__message-input"
            placeholder="Thêm bình luận..."
          />
          <img src="/Emo.svg" alt="" className="chat__message-emo" />
          <img src="/Send.svg" alt="" className="chat__message-send" />
        </div>
      </div>
    </Dialog>
  );
}
