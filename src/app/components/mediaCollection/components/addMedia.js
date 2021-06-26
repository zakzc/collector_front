import React from "react";

// comps
import GoBackButton from "../../views/goBackButton";
import FormMedia from "./formMedia";
import SmallHeader from "../../views/smallHeader";

const AddMedia = ({ setCurrentOperation }) => {
  // * view
  return (
    <>
      <SmallHeader subtitle={"Add new book"} />
      <div className="m-5">
        <FormMedia formMode={"ADD_book"} />
      </div>
      <GoBackButton setCurrentOperation={setCurrentOperation} />
    </>
  );
};
export default AddMedia;
