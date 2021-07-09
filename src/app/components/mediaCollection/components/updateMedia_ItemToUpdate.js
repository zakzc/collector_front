import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// comps
import MediaItemTableView from "../../views/mediaItemTableView";
// ui
import ListGroup from "react-bootstrap/ListGroup";
// store
import { loadMedias } from "../../../../store/medias";

const ItemToUpdate = () => {
  // * data
  const dispatch = useDispatch();
  const currentItemId = useSelector(
    (state) => state.mediaContext[0].currentSelectedItem
  );
  const getItem = useSelector((state) =>
    state.medias.mediasList.filter((item) => item._id === currentItemId)
  );
  const itemToUpdate = getItem[0];
  console.log("update item  ==> ", currentItemId, itemToUpdate);
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [getItem, dispatch]);

  //* view
  return (
    <ListGroup className="ml-2 mr-2" key={itemToUpdate.title}>
      <ListGroup.Item key={itemToUpdate.mediaId} variant="info">
        <h4 className="ml-1 mt-2 ">
          <span className="font-weight-bold">{itemToUpdate.title}</span> by{" "}
          {itemToUpdate.author}
        </h4>
        <br />
        <MediaItemTableView media={itemToUpdate} />
      </ListGroup.Item>
      <div className="mt-3" />
    </ListGroup>
  );
};
export default ItemToUpdate;
