// import { useDispatch } from "react-redux";
// store
// import { AddMedia } from "../../../../store/Medias";
// utils

const formHandler = (formMode, values) => {
  if (formMode === "ADD_book") {
    console.log("ADD book", values);
  } else if (formMode === "UPDATE_book") {
    console.log("Update book", values);
  }
  return true;
};

export default formHandler;