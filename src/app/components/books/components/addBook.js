import React from "react";

// comps
import GoBackButton from "../../views/goBackButton";
import FormBook from "./formBook";
import SmallHeader from "../../views/smallHeader";

const AddBook = ({ setCurrentView }) => {
  // * view
  return (
    <>
      <SmallHeader subtitle={"Add new book"} />
      <div className="m-5">
        <FormBook formMode={"ADD_book"} />
      </div>
      <GoBackButton setCurrentView={setCurrentView} />
    </>
  );
};
export default AddBook;
