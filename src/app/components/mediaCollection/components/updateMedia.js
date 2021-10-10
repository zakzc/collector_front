import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadMedias } from "../../../../store/medias";
// comps
import FormUpdateMedia from "./updateMediaForm";
import SmallHeader from "../../views/smallHeader";
import ItemToUpdate from "./updateMediaItemToUpdate";

const UpdateMedia = () => {
  // * data
  const dispatch = useDispatch();
  const currentMediaView = useSelector(
    (state) => state.appContext.currentMediaView
  );

  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [currentMediaView, dispatch]);

  // * view
  return (
    <>
      <SmallHeader />
      <h4 className="text-secondary">Original Values</h4>
      <ItemToUpdate />
      <h4 className="text-info">Values to Update</h4>
      <FormUpdateMedia />
    </>
  );
};
export default UpdateMedia;
