// import { useDispatch } from "react-redux";
// store
// import { AddMedia } from "../../../../store/Medias";
// utils

const formHandler = (formMode, values) => {
  if (formMode === "ADD_media") {
    console.log("ADD new media: ", values);
  } else if (formMode === "UPDATE_media") {
    console.log("Update this media", values);
  }
  return true;
};

export default formHandler;
