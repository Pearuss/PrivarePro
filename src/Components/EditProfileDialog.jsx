import { Dialog, Slide, Slider } from "@mui/material";
import React, { useCallback, useRef, useState } from "react";
import Cropper from "react-easy-crop";
import { toast } from "react-toastify";
import getCroppedImg from "../utils/helper";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function EditProfileDialog({ open, setOpen }) {
  const [profileImage, setProfileImage] = useState("ChannelImage.png");
  const profileImageRef = useRef();

  const [openCropImage, setOpenCropImage] = useState(false);
  const [croppedArea, setCroppedArea] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoomImage, setZoomImage] = useState(1);

  const onCropComplete = (croppedArea, croppedAreaPixels) => {
    // console.log(croppedArea);
    setCroppedArea(croppedAreaPixels);
  };
  const chooseImage = useCallback(async () => {
    const canvas = await getCroppedImg(profileImage, croppedArea);

    setProfileImage(canvas);
    setOpenCropImage(false);
  }, [croppedArea]);

  const triggerImageProfileSelectPopup = () => {
    profileImageRef?.current?.click();
  };

  const onSelectFile = (event) => {
    if (profileImage === undefined) {
      setProfileImage(null);
    }

    if (event.target.files && event.target.files.length > 0) {
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.addEventListener("load", () => {
        setProfileImage(reader?.result);
        setOpenCropImage(true);
      });
    }
  };

  const handleClose = () => {
    setOpen(false);
    setOpenCropImage(false);
  };
  return (
    <>
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
            <div className="common-dialog__title">Sửa</div>
            <img src="/DeleteIcon.svg" alt="" onClick={handleClose} />
            <input
              ref={profileImageRef}
              accept="image/*"
              type="file"
              onChange={onSelectFile}
              style={{ display: "none" }}
            />
          </div>
          <div className="profile-popup">
            <div className="profile-popup__info">
              <div className="profile-popup__title">Ảnh hồ sơ</div>
              <div className="profile-popup__img">
                <img
                  src={profileImage}
                  alt="ảnh đại diện"
                  className="profile-popup__img-avatar"
                />
                <img
                  src="EditBtn.svg"
                  alt="sửa ảnh đại diện"
                  className="profile-popup__editBtn"
                  onClick={triggerImageProfileSelectPopup}
                />
              </div>
            </div>
            <div className="profile-popup__info">
              <div className="profile-popup__title">Tên</div>
              <input
                type="text"
                className="profile-popup__input"
                value={"Test"}
              />
            </div>
            <div className="profile-popup__info profile-popup__length-text">
              <div className="profile-popup__title">Tiểu sử</div>
              <div className="profile-popup__des">
                <textarea
                  type="text"
                  cols={3}
                  rows={1}
                  className="profile-popup__textarea"
                  defaultValue="Test"
                />
                <span className="profile-popup__maxLength">0/999</span>
              </div>
            </div>
          </div>
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
              Lưu
            </button>
          </div>
        </div>
      </Dialog>
      {profileImage ? (
        <Dialog
          fullWidth
          open={openCropImage}
          onClose={handleClose}
          TransitionComponent={Transition}
          keepMounted
          className="popup-crop"
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
          <div className="popup-crop__main">
            <Cropper
              image={profileImage}
              crop={crop}
              zoom={zoomImage}
              aspect={1}
              onCropChange={setCrop}
              onZoomChange={setZoomImage}
              onCropComplete={onCropComplete}
            />
            <Slider
              sx={{ color: "transparent" }}
              min={1}
              max={3}
              step={0.1}
              value={zoomImage}
              onChange={(zoom) => setZoomImage(zoom)}
            />
          </div>
          <div className="popup-crop__btn">
            <button
              type="button"
              className="btn btn--blue"
              onClick={chooseImage}
            >
              Choose
            </button>
          </div>
        </Dialog>
      ) : null}
    </>
  );
}

export default EditProfileDialog;
