import React from "react";
import { useSelector } from "react-redux";
/// comps
import ConfirmationToast from "../views/confirmationToast";
// store

const FeedbackToUser = () => {
  // * data
  // get data
  const backEndConfirmedProcessing = useSelector(
    (state) => state.medias.backEndProcessConfirmed
  );
  const dataWasSent = useSelector((state) => state.appContext.dataWasSent);
  const processingError = useSelector((state) => state.medias.error);
  // reset data

  // re-set data
  // if (show === false) {
  //   dispatch(resetDataProcessing());
  // }
  // const dispatch = useDispatch();
  //  import { useDispatch } from "react-redux";
  //import { resetDataProcessing } from "../../../store/medias";

  // * view
  if (processingError.isError) {
    return (
      <ConfirmationToast success={false} message={processingError.message} />
    );
  } else if (dataWasSent === true) {
    if (backEndConfirmedProcessing === true) {
      return (
        <ConfirmationToast success={true} message={"Data was processed"} />
      );
    }
    if (backEndConfirmedProcessing === false) {
      return (
        <ConfirmationToast success={false} message={"Something went wrong"} />
      );
    }
  } else {
    return null;
  }
};
export default FeedbackToUser;
