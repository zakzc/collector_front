import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// store
import { resetDataProcessing } from "../../../store/medias";
import { setDataWasSent } from "../../../store/appContext";
// ui
import Toast from "react-bootstrap/Toast";
// ui
import { Col } from "react-bootstrap";
import { Row } from "react-bootstrap";
// ui - icon
import { CheckCircle } from "react-bootstrap-icons";
//import { XCircle } from "react-bootstrap-icons";

const ConfirmationToast = () => {
  // * data
  const dispatch = useDispatch();
  const [show, setShow] = useState(true);
  const success = useSelector((state) => state.medias.backEndProcessConfirmed);
  const dataProcessing = useSelector((state) => state.appContext.dataWasSent);
  ///
  const handleClose = () => {
    setShow(false);
    dispatch(resetDataProcessing());
    dispatch(setDataWasSent(false));
  };

  // * view
  return (
    <>
      {dataProcessing ? (
        <Row>
          <Col xs={6}>
            <Toast
              onClose={() => handleClose()}
              show={show}
              delay={3000}
              autohide={true}
            >
              <Toast.Header
                className={
                  success
                    ? "bg-info shadow-1-strong"
                    : "bg-info shadow-1-strong"
                }
              >
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto text-white">
                  <CheckCircle className="mr-2" />
                  "Data is being processed"
                </strong>
              </Toast.Header>
              <Toast.Body>Just wait a bit as we reach for data</Toast.Body>
            </Toast>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default ConfirmationToast;
