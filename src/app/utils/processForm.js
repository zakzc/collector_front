// import React from "react";
import { useDispatch } from "react-redux";
// store
import { addMedia } from "../../store/medias";

const ProcessForm = (data) => {
  const dispatch = useDispatch(addMedia(data));
  console.log("what? ", dispatch);
  //   if (dispatch) {
  //     return true;
  //   } else {
  //     return false;
  //   }
};

export default ProcessForm;
