import React from "react";
import { useSelector } from "react-redux";
// store
// import { currentMediaView } from "../../../../store/context";
// comps
import FormMedia from "./formMedia";
import SmallHeader from "../../views/smallHeader";

const AddMedia = ({ setCurrentOperation }) => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.context[0].currentMediaView
  );

  // * view
  return (
    <>
      <SmallHeader subtitle={`Add new ${currentMediaView.toLowerCase()}`} />
      {/* <div className="m-5"> */}
      <FormMedia formMode={"ADD_media"} />
      {/* </div> */}
    </>
  );
};
export default AddMedia;
