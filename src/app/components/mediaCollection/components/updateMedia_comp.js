import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadMedias } from "../../../../store/medias";
// comps
import FormMedia from "./formMedia";
import SmallHeader from "../../views/smallHeader";
import ItemToUpdate from "./updateMedia_ItemToUpdate";

const UpdateMedia = ({ setCurrentOperation, setMediaToManage }) => {
  // * data
  const dispatch = useDispatch();
  const findBook = useSelector((state) =>
    state.medias.mediasList.filter((book) => book._id === setMediaToManage)
  );
  const currentItem = findBook[0];
  const currentMediaView = useSelector(
    (state) => state.context[0].currentMediaView
  );
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [currentItem, dispatch]);

  // * view
  return (
    <>
      <SmallHeader subtitle={`Update ${currentMediaView.toLowerCase()}`} />
      <h4>Original Values</h4>
      <ItemToUpdate currentItem={currentItem} />
      <FormMedia formMode={"UPDATE_media"} />
    </>
  );
};
export default UpdateMedia;
