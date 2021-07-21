import React from "react";
import { useSelector } from "react-redux";
// comps
import FormAdd from "./addMedia_FormAdd";
import SmallHeader from "../../views/smallHeader";

const AddMedia = () => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.appContext.currentMediaView
  );

  // * view
  return (
    <>
      <SmallHeader />
      <FormAdd />
    </>
  );
};
export default AddMedia;
