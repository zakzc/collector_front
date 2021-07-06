// store
import { addMedia } from "../../store/medias";
// import { updateMedia } from "../../store/medias";
import { removeMedia } from "../../store/medias";

const ProcessForm = (formMode, data, dispatch, setConfirmDataProcessing) => {
  console.log("receive in process form:", formMode, data, data._id);
  if (formMode === "addMedia") {
    try {
      dispatch(addMedia(data));
      setConfirmDataProcessing(true);
    } catch (error) {
      setConfirmDataProcessing(false);
      return false;
    }
  } else if (formMode === "delete") {
    try {
      dispatch(removeMedia(data));
      setConfirmDataProcessing(true);
    } catch (error) {
      setConfirmDataProcessing(false);
      return false;
    }
  }
};

export default ProcessForm;
