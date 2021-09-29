import React from "react";

import recipeActions from "../../redux/actions/recipe.action";
import { useDispatch, useSelector } from "react-redux";
import "./AvatarUploadButton.css";
import { Button } from "react-bootstrap";

const AvatarUploadButton = () => {
  const dispatch = useDispatch();
  const urlToImage = useSelector((state) => state.recipe.urlToImage);
  var myWidget = window.cloudinary.createUploadWidget(
    {
      cloudName: "drupykrkw",
      uploadPreset: "gkc8r71a",
    },
    (error, result) => {
      if (!error && result && result.event === "success") {
        console.log("Done! Here is the image info: ", result.info);
        dispatch(recipeActions.uploadImage({ avatarUrl: result.info.url }));
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
        Upload files
      </Button>

      <img
        src={urlToImage}
        alt="hello"
        style={urlToImage ? { display: "block" } : { display: "none" }}
      />
    </div>
  );
};

export default AvatarUploadButton;
