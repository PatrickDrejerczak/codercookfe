import React from "react";

import recipeActions from "../../redux/actions/recipe.action";
import { useDispatch, useSelector } from "react-redux";
import "./ImgUploadButton.css";
import { Button } from "react-bootstrap";

const ImgUploadButton = () => {
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
        dispatch(recipeActions.uploadImage({ urlToImage: result.info.url }));
      }
    }
  );

  return (
    <div>
      <Button
        variant="success"
        style={{ backgroundColor: "#007343" }}
        onClick={myWidget.open}
        id="upload_widget"
        className="cloudinary-button"
      >
        Upload Picture
      </Button>

      <img
        src={urlToImage}
        alt="hello"
        style={urlToImage ? { display: "block" } : { display: "none" }}
      />
    </div>
  );
};

export default ImgUploadButton;
