import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import Comments from "../Components/Comments/Comments";
import CommentForm from "../Components/Comments/CommentForm";
import { Tooltip } from "@mui/material";

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
      sx={{
        ".MuiPaper-root": {
          height: "80vh",
          minWidth: "100vw",
          background: "#13151f",
          position: "absolute",
          bottom: "0",
          margin: "0",
          borderRadius: "12px 12px 0 0",
        },
      }}
    >
      <div className="box-comment">
        <div className="box-comment__head">
          <div className="box-comment__title">
            Bình luận<span>124</span>
          </div>
          <Tooltip
            componentsProps={{
              tooltip: {
                sx: {
                  bgcolor: "#151822",
                  "& .MuiTooltip-arrow": {
                    color: "#151822",
                  },
                },
              },
            }}
            title={
              <div className="box-comment__tooltip">
                <p>Bình luận hàng đầu</p>
                <p>Mới nhất xếp trước</p>
              </div>
            }
            placement="bottom-start"
          >
            <img src="/SortIcon.svg" alt="" className="box-comment__sortIcon" />
          </Tooltip>

          <img src="/DeleteIcon.svg" alt="" onClick={handleClose} />
        </div>
        <div className="box-comment__main">
          <div className="box-comment__box">
            <Comments currentUserId={1} />
          </div>
        </div>

        <CommentForm />
      </div>
    </Dialog>
  );
}
