import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// data
import UseSelectedData from "../../../hooks/useSelectedData";
// store
import { loadMedias } from "../../../../store/medias";
// comps
import AddButton from "../../views/buttons/addButton";
import MediaList from "./listOfMedias_MediaList";
import NoMediaToShow from "../../views/noMediaToShow";
import SmallHeader from "../../views/smallHeader";

const ListOfMedias = ({ setCurrentOperation, setMediaToManage }) => {
  // * data
  const dispatch = useDispatch();
  // const medias = useSelector((state) => state.medias.mediasList);
  const medias = UseSelectedData();
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
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
      {medias.length === 0 ? (
        <NoMediaToShow />
      ) : (
        <MediaList
          Medias={medias}
          setCurrentOperation={setCurrentOperation}
          setMediaToManage={setMediaToManage}
        />
      )}
    </>
  );
};

export default ListOfMedias;
