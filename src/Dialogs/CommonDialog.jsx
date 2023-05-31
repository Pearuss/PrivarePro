import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";
import { toast } from "react-toastify";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function CommonDialog({
  open,
  setOpen,
  title,
  submitText,
  children,
}) {
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
          <div className="common-dialog__title">{title}</div>
          <img src="/DeleteIcon.svg" alt="" onClick={handleClose} />
        </div>
        {children}
        <div className="common-dialog__footer">
          <button className="btn btn--gray">Hủy</button>
          <button
            className="btn btn--blue"
            onClick={() => {
              setOpen(false);
              toast.success("Hồ sơ đã cập nhật thành công.", {
                position: "top-right",
              });
            }}
          >
            {submitText}
          </button>
        </div>
      </div>
    </Dialog>
  );
}
