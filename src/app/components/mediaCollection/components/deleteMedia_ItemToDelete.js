import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import MediaItemTableView from "../../views/mediaItemTableView";
// ui
import ListGroup from "react-bootstrap/ListGroup";
// store
import { loadMedias } from "../../../../store/medias";

const ItemToDelete = () => {
  // * data
  const dispatch = useDispatch();
  const currentItemId = useSelector(
    (state) => state.mediaContext[0].currentSelectedItem
  );
  const getItem = useSelector((state) =>
    state.medias.mediasList.filter((item) => item._id === currentItemId)
  );
  const itemToDelete = getItem[0];
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [getItem, dispatch]);

  return (
    <ListGroup className="ml-2 mr-2" key={itemToDelete.title}>
      <ListGroup.Item key={itemToDelete.mediaId} variant="info">
        <h4 className="ml-1 mt-2 ">
          <span className="font-weight-bold">{itemToDelete.title}</span> by{" "}
          {itemToDelete.author}
        </h4>
        <br />
        <MediaItemTableView media={itemToDelete} />
      </ListGroup.Item>
      <div className="mt-3" />
    </ListGroup>
  );
};
export default ItemToDelete;
