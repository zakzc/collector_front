//import React from "react";
import { useDispatch } from "react-redux";
// store
import { addMedia } from "../../store/medias";

const IncludeMedia = (data) => {
  let Testme = () => {
    useDispatch(addMedia(data));
  };
  console.log("add: ", data);
  console.log("testme", Testme);
  return true;
};
export default IncludeMedia;
