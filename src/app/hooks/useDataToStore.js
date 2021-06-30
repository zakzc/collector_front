//import React from "react";
import { useDispatch } from "react-redux";
// store
import { addMedia } from "../../store/medias";

const useDataToStore = (data) => {
  useDispatch(addMedia(data));
  return true;
};
export default useDataToStore;
