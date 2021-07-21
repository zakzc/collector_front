import { useEffect } from "react";
import { useDispatch } from "react-redux";
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
  const medias = UseSelectedData();
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [medias, dispatch]);

  // * view
  return (
    <>
      <AddButton setCurrentOperation={setCurrentOperation} />
      <SmallHeader />
      {medias.length === 0 ? <NoMediaToShow /> : <MediaList />}
    </>
  );
};

export default ListOfMedias;
