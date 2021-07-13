import React from "react";
import { useSelector } from "react-redux";
// comps
import FormAddMedia from "./AddMedia_FormAddMedia";
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
      <FormAddMedia />
    </>
  );
};
export default AddMedia;
