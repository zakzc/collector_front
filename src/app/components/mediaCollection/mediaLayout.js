import React, { useState } from "react";
import { useSelector } from "react-redux";
/// comps
import Header from "../views/header";
import GoBackButton from "../views/buttons/goBackButton";
import MediaView from "./mediaView";
// ui
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const MediaLayout = () => {
  const [currentOperation, setCurrentOperation] = useState("list");
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );
  return (
    <>
      <Header title={currentMediaView} />
      <Row>
        <Col></Col>
        <Col xs={12} md={9}>
          <div className="ml-2">
            {currentOperation === "list" ? null : (
              <GoBackButton setCurrentOperation={setCurrentOperation} />
            )}
          </div>
          <MediaView
            currentOperation={currentOperation}
            setCurrentOperation={setCurrentOperation}
          />
        </Col>
        <Col></Col>
      </Row>
    </>
  );
};
export default MediaLayout;
