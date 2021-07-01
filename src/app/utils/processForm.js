// store
import { addMedia } from "../../store/medias";
import { updateMedia } from "../../store/medias";

const ProcessForm = (
  formMode,
  data,
  dispatch,
  setConfirmDataProcessing,
  id = null
) => {
  if (formMode === "addMedia") {
    try {
      dispatch(addMedia(data));
      setConfirmDataProcessing(true);
    } catch (error) {
      setConfirmDataProcessing(false);
      return false;
    }
  } else if (formMode === "updateMedia") {
    dispatch(updateMedia(id, data));
  }
};

export default ProcessForm;
