import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// ui
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
// ico
import { PlusCircle } from "react-bootstrap-icons";
// store
import { loadMedias } from "../../../../store/medias";
// comps
import MediaList from "./listOfMedias_ListOfMedias";

const ListOfMedias = ({ setCurrentView, setBookToManage }) => {
  // * data
  const dispatch = useDispatch();
  const medias = useSelector((state) => state.medias.mediasList);
  ///
  useEffect(() => {
    dispatch(loadMedias());
  }, [medias, dispatch]);
  ///

  // * view
  return (
    <>
      <Row>
        <Col></Col>
        <Col>
          <Button
            variant="info"
            size="lg"
            className="mb-3"
            block
            onClick={() => setCurrentView("add")}
          >
            <PlusCircle />
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <MediaList
        Medias={medias}
        setCurrentView={setCurrentView}
        setBookToManage={setBookToManage}
      />
    </>
  );
};

export default ListOfMedias;
