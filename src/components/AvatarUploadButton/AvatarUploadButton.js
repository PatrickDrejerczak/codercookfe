import React from "react";

import { authActions } from "../../redux/actions/auth.action";
import { useDispatch, useSelector } from "react-redux";
import "./AvatarUploadButton.css";
import { Button } from "react-bootstrap";

const AvatarUploadButton = () => {
  const dispatch = useDispatch();
  const avatarUrl = useSelector((state) => state.auth.avatarUrl);

  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "drupykrkw",
      uploadPreset: "gkc8r71a",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        dispatch(authActions.avatarUpload({ avatarUrl: result.info.url }));
        dispatch(authActions.updateProfile(avatarUrl));
      }
    }
  );

  return (
    <div>
      <Button
        variant="success"
        onClick={myWidget.open}
        id="upload_widget"
        className="cloudinary-button"
      >
        Change Avatar
      </Button>

      <img
        src={avatarUrl}
        alt="hello"
        style={avatarUrl ? { display: "block" } : { display: "none" }}
      />
    </div>
  );
};

export default AvatarUploadButton;
