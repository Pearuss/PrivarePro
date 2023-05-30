import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommentDialog({ open, setOpen, children, submitText }) {
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
          height: "auto",
          minWidth: "720px",
          background: "#13151f",
          border: "1px solid rgba(255, 255, 255, 0.08)",
          borderRadius: "24px",
        },
      }}
    >
      <div className="common-dialog">
        <div className="common-dialog__header">
          <div className="common-dialog__title"></div>
          <img src="/DeleteIcon.svg" alt="" onClick={handleClose} />
        </div>
        {children}
        <div className="common-dialog__footer">
          <button className="btn btn--blue">Hủy</button>
          <button className="btn btn--blue">{submitText}</button>
        </div>
      </div>
    </Dialog>
  );
}
