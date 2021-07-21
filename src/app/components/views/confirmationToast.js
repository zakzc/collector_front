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
import { XCircle } from "react-bootstrap-icons";

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
              autohide
            >
              <Toast.Header
                className={
                  success
                    ? "bg-info shadow-1-strong"
                    : "bg-danger shadow-1-strong"
                }
              >
                <img
                  src="holder.js/20x20?text=%20"
                  className="rounded mr-2"
                  alt=""
                />
                <strong className="mr-auto text-white">
                  {success ? (
                    <CheckCircle className="mr-2" />
                  ) : (
                    <XCircle className="mr-2" />
                  )}
                  {success
                    ? "Data was processed"
                    : "Problems with data processing"}
                </strong>
              </Toast.Header>
              <Toast.Body>
                Some changes might require you to reload the page
              </Toast.Body>
            </Toast>
          </Col>
        </Row>
      ) : null}
    </>
  );
};

export default ConfirmationToast;
