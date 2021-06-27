import React, { useState } from "react";
import { useSelector } from "react-redux";
/// comps
import Header from "../views/header";
import GoBackButton from "../../components/views/goBackButton";
import MediaView from "./mediaView";
// ui
import Col from "react-bootstrap/Col";

const MediaLayout = () => {
  const [currentOperation, setCurrentOperation] = useState("list");
  const currentMediaView = useSelector(
    (state) => state.context[0].currentMediaView
  );
  return (
    <Col>
      <Header title={currentMediaView} />
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
  );
};
export default MediaLayout;
