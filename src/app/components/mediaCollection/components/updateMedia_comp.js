import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadMedias } from "../../../../store/medias";
// comps
import FormMedia from "./formMedia";
import GoBackButton from "../../views/goBackButton";
import SmallHeader from "../../views/smallHeader";
import ItemToUpdate from "./updateMedia_ItemToUpdate";

const UpdateMedia = ({ setCurrentView, bookToManage }) => {
  // * data
  const dispatch = useDispatch();
  const findBook = useSelector((state) =>
    state.Medias.listOfMedias.filter((book) => book._id === bookToManage)
  );
  const currentBook = findBook[0];
  useEffect(() => {
    dispatch(loadMedias());
  }, [currentBook, dispatch]);
  console.log("from update:", bookToManage, currentBook);

  // * view
  return (
    <>
      <SmallHeader subtitle={"Update book"} />
      <h4>Original Values</h4>
      <ItemToUpdate currentBook={currentBook} />
      <FormMedia formMode={"UPDATE_book"} />
      <GoBackButton setCurrentView={setCurrentView} />
    </>
  );
};
export default UpdateMedia;
