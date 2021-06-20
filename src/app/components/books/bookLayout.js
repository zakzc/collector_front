import React from "react";
/// comps
// import BookHeader from "./b_Header";
import Header from "../views/header";
import BookRoutes from "./bookRoutes";

const BookLayout = () => {
  return (
    <>
      <Header title={"Books"} />
      <BookRoutes />
    </>
  );
};
export default BookLayout;
