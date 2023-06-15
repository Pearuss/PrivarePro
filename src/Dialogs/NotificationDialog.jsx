import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function NotificationDialog({ open, setOpen, setOpenMenu }) {
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      hideBackdrop
      keepMounted
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {},
      }}
      PaperProps={{
        sx: {
          minHeight: "calc(100vh - 56px)",
          background: "#090B12",
          position: "absolute",
          top: "0",
          left: "0",
          margin: "0",
          borderRadius: "12px 12px 0 0",
          zIndex: "10",
        },
      }}
    >
      <div className="notification">
        <div className="notification__header">
          <img
            src="Menu.svg"
            alt=""
            className="notification__header-menu"
            onClick={() => setOpenMenu(true)}
          />
          <h5>Thông báo</h5>
          <img
            src="view-all.svg"
            alt=""
            className="notification__header-view"
          />
        </div>
        <div className="notification__list">
          {[1, 2, 3, 4, 5, 6, 7].map((item) => (
            <div className="notification__item">
              <div className="notification__item-left">
                <div className="notification__item__viewed"></div>
                <img src="ChannelImage.png" alt="" width={32} height={32} />
              </div>
              <div className="notification__item-right">
                <div className="notification__item__content">
                  <h4>Tiêu đề video không giới hạn tối đa dòng</h4>
                  <p>3 giờ trước</p>
                </div>
                <div className="notification__item__img">
                  <img src="VideoDemo.png" alt="" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
}
