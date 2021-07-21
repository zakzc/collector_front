import { useDispatch, useSelector } from "react-redux";
// store
import { resetDataProcessing } from "../../store/medias";
import { setDataWasSent } from "../../store/appContext";

const UseResetUserFeedback = () => {
  const dispatch = useDispatch();
  //check if a backend operation was performed
  const checkBackEndProcess = useSelector(
    (state) => state.medias.checkBackEndProcess
  );
  const dataWasSent = useSelector((state) => state.appContext.dataWasSent);
  if (checkBackEndProcess === true && dataWasSent === true) {
    //if so, reset it to false
    dispatch(resetDataProcessing());
    dispatch(setDataWasSent(false));
  }
  return true;
};
export default UseResetUserFeedback;
