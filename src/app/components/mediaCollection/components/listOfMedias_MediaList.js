import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// comps
import ListItems from "./listOFMedias_ML_ListItems";
import OrderButtons from "./listOfMedias_ML_OrderButtons";
// data
import UseSelectedData from "../../../hooks/useSelectedData";
// store
import { loadMedias } from "../../../../store/medias";
// utils
import getOrderedMediaList from "../../../utils/getOrderedMediaList";

const MediaList = () => {
  // * data
  const dispatch = useDispatch();
  const medias = UseSelectedData();
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [medias, dispatch]);
  ///
  const [orderCriteria, setOrderCriteria] = useState("author");
  let orderedMediaList = getOrderedMediaList(medias, orderCriteria);

  // * view
  return (
    <>
      {medias.length > 1 ? (
        <OrderButtons setOrderCriteria={setOrderCriteria} />
      ) : null}
      <ListItems orderedMediaList={orderedMediaList} />
    </>
  );
};
export default MediaList;
