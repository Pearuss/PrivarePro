import * as React from "react";
import Dialog from "@mui/material/Dialog";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function ShareDialog({ open, setOpen }) {
  const handleClose = () => {
    setOpen(false);
  };

  const menuShare = [
    {
      text: "Messenger",
      icon: "/shareIcon/Messenger.svg",
    },
    {
      text: "Facebook",
      icon: "/shareIcon/Facebook.svg",
    },
    {
      text: "Zalo",
      icon: "/shareIcon/Zalo.svg",
    },
    {
      text: "WhatsApp",
      icon: "/shareIcon/WhatsApp.svg",
    },
    {
      text: "Telegram",
      icon: "/shareIcon/Telegram.svg",
    },
    {
      text: "Twitter",
      icon: "/shareIcon/Twitter.svg",
    },
    {
      text: "Email",
      icon: "/shareIcon/Email.svg",
    },
  ];

  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      sx={{
        ".MuiPaper-root": {
          height: "295px",
          minWidth: "100vw",
          background: "#13151f",
          position: "absolute",
          bottom: "0",
          margin: "0",
        },
      }}
    >
      <div className="share">
        <div className="share__header">
          <h3 className="share__title">Chia sẻ</h3>
          <img
            className="share__deleteIcon"
            src="DeleteIcon.svg"
            alt="delete icon"
            onClick={() => setOpen(false)}
          />
        </div>
        <div className="share__lists">
          {menuShare.map((item) => (
            <div key={item.text} className="share__icon">
              <img src={item.icon} alt="" />
              <p className="share__text">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </Dialog>
  );
}
