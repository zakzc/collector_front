// import React from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { addMedia } from "../../store/medias";
// import { updateMedia } from "../../store/medias";
import { removeMedia } from "../../store/medias";
import { setCurrentMediaCRUD } from "../../store/mediaContext";
import { setDataWasProcessed } from "../../store/mediaContext";

const ProcessForm = (data) => {
  // const dispatch = useDispatch();
  // const currentMediaCRUD = useSelector(
  //   (state) => state.mediaContext[0].currentMediaCRUD
  // );

  console.log("receive in process form:", data);
  // if (currentMediaCRUD === "create") {
  //   try {
  // dispatch(addMedia(data));
  // dispatch(setDataWasProcessed(true));
  // dispatch(setCurrentMediaCRUD("read"));
  return true;
  //   } catch (error) {
  //     return false;
  //   }
  // } else if (currentMediaCRUD === "delete") {
  //   try {
  //     dispatch(removeMedia(data));
  //     dispatch(setDataWasProcessed(true));
  //     dispatch(setCurrentMediaCRUD("read"));
  //     return true;
  //   } catch (error) {
  //     return false;
  //   }
  // }
};

export default ProcessForm;
