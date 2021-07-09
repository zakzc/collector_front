import React from "react";
import { useSelector } from "react-redux";
// store
// import { currentMediaView } from "../../../../store/mediaContext";
// comps
import FormMedia from "./formMedia";
import SmallHeader from "../../views/smallHeader";

const AddMedia = () => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );

  // * view
  return (
    <>
      <SmallHeader subtitle={`Add new ${currentMediaView.toLowerCase()}`} />
      <FormMedia />
    </>
  );
};
export default AddMedia;
