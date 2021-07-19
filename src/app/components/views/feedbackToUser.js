import React from "react";
import { useSelector } from "react-redux";
/// comps
import ConfirmationToast from "../views/confirmationToast";
// store

const FeedbackToUser = () => {
  // * data
  const backEndConfirmedProcessing = useSelector(
    (state) => state.medias.backEndProcessConfirmed
  );
  const dataWasSent = useSelector((state) => state.appContext.dataWasSent);

  console.log("Feed: ", backEndConfirmedProcessing, dataWasSent);

  // * view

  if (dataWasSent === true && backEndConfirmedProcessing === true) {
    return <ConfirmationToast success={true} message={"Data was processed"} />;
  }
  if (dataWasSent === true && backEndConfirmedProcessing === false) {
    return (
      <ConfirmationToast success={false} message={"Something went wrong"} />
    );
  }
  return null;
};
export default FeedbackToUser;
