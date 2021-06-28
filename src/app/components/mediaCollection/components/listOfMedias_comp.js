import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { loadMedias } from "../../../../store/medias";
// comps
import AddButton from "../../views/buttons/addButton";
import MediaList from "./listOfMedias_MediaList";
import SmallHeader from "../../views/smallHeader";

const ListOfMedias = ({ setCurrentOperation, setMediaToManage }) => {
  // * data
  const dispatch = useDispatch();
  const medias = useSelector((state) => state.medias.mediasList);
  const currentMediaView = useSelector(
    (state) => state.context[0].currentMediaView
  );
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [medias, dispatch]);
  ///

  // * view
  return (
    <>
      <AddButton setCurrentOperation={setCurrentOperation} />
      <SmallHeader subtitle={`List of ${currentMediaView.toLowerCase()}s`} />
      <MediaList
        Medias={medias}
        setCurrentOperation={setCurrentOperation}
        setMediaToManage={setMediaToManage}
      />
      {/* </div> */}
    </>
  );
};

export default ListOfMedias;
