import React from "react";
import { useSelector } from "react-redux";

const SmallHeader = ({ subtitle }) => {
  // * data
  const currentMediaView = useSelector(
    (state) => state.appContext.currentMediaView
  );
  const currentMediaCRUD = useSelector(
    (state) => state.appContext.currentMediaCRUD
  );

  // * view
  return (
    <h4 className="text-right text-info m-4">
      {`${currentMediaCRUD.toLowerCase()} ${currentMediaView.toLowerCase()}
      `}
    </h4>
  );
};
export default SmallHeader;
