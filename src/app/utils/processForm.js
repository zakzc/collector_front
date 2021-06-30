// store
import { addMedia } from "../../store/medias";
import { updateMedia } from "../../store/medias";

const ProcessForm = (formMode, data, dispatch, id) => {
  if (formMode === "addMedia") {
    dispatch(addMedia(data));
  } else if (formMode === "updateMedia") {
    dispatch(updateMedia(id, data));
  }
};

export default ProcessForm;
