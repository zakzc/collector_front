import React, { useState } from "react";
import { useFormik } from "formik";
// import { useDispatch } from "react-redux";
// store
// import { AddMedia } from "../../../../store/Medias";
// comps
import CheckButton from "../../views/buttons/checkButton";
// utils
import FormMediaHandler from "../../../utils/formMediaHandler";
import validationSchema from "../../../utils/mediaSchema";
// ui
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// ico
import ConfirmationToast from "../../views/confirmationToast";

const FormMedia = ({ formMode }) => {
  // * data
  const [confirmDataProcessing, setConfirmDataProcessing] = useState(false);
  ///
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        title: "",
        author: "",
        subType: "",
        mediaID: "",
        typeOfMedia: "",
        price: "",
        sellable: "",
        dateOfPurchase: "",
        quantity: "",
        details: "",
        notes: "",
      },
      validationSchema,
      onSubmit: (values, { resetForm }) => {
        FormMediaHandler(formMode, values);
        setConfirmDataProcessing(true);
        resetForm();
      },
    });

  // * view
  return (
    <Form onSubmit={handleSubmit} className="m-3">
      <Form.Row>
        <Col>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Book title</Form.Label>
            <Form.Control
              placeholder="Title"
              as="textarea"
              name="title"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
          </Form.Group>
          {touched.title && errors.title ? (
            <span className="text-danger ml-3">{errors.title}</span>
          ) : null}
        </Col>

        <Col>
          <Form.Group as={Col} controlId="formGridAuthor">
            <Form.Label>Author</Form.Label>
            <Form.Control
              placeholder="Author"
              as="textarea"
              name="author"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />
          </Form.Group>
          {touched.author && errors.author ? (
            <span className="text-danger ml-3">{errors.author}</span>
          ) : null}
        </Col>
      </Form.Row>

      <Form.Row>
        <Col>
          <Form.Group as={Col} controlId="formGridsubTitle">
            <Form.Label>subType</Form.Label>
            <Form.Control
              placeholder="subType"
              name="subType"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.subTitle}
            />
            {touched.subTitle && errors.subTitle ? (
              <span className="text-danger ml-3">{errors.subTitle}</span>
            ) : null}
          </Form.Group>
        </Col>

        <Form.Group as={Col} controlId="formGridMediaId">
          <Col>
            <Form.Label>Media Id</Form.Label>
            <Form.Control
              placeholder="Media id"
              name="mediaID"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.mediaID}
            />
            <p>Unique identifier: ISBN for books, MID for DVDs etc.</p>
            {touched.mediaID && errors.mediaID ? (
              <span className="text-danger ml-3">{errors.mediaID}</span>
            ) : null}
          </Col>
        </Form.Group>
      </Form.Row>

      <Form.Row>
        <Form.Group as={Col} controlId="formGridPrice">
          <Col>
            <Form.Label>Price</Form.Label>
            <Form.Control
              placeholder="Price"
              name="price"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.price}
            />
            {touched.price && errors.price ? (
              <span className="text-danger ml-3">Only numbers are allowed</span>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSell">
          <Col>
            <Form.Label>Available to sell?</Form.Label>
            <Form.Control
              size="lg"
              custom
              as="select"
              name="sellable"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.sellable}
            >
              <option> -- </option>
              <option>Yes</option>
              <option>No</option>
            </Form.Control>
            {touched.sellable && errors.sellable ? (
              <span className="text-danger ml-3">{errors.sellable}</span>
            ) : null}
          </Col>
        </Form.Group>
      </Form.Row>

      <Form.Row className="mr-2">
        <Form.Group as={Col} controlId="formGridsubTitle">
          <Col>
            <Form.Label>Date of Purchase</Form.Label>
            <Form.Control
              placeholder="Date of purchase YYYY-MM-DD"
              name="dateOfPurchase"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateOfPurchase}
            />
            {touched.dateOfPurchase && errors.dateOfPurchase ? (
              <span className="text-danger ml-3">
                Please inform date of purchase as YYYY-MM-DD
              </span>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridMediaId">
          <Form.Label>Quantity</Form.Label>
          <Form.Control
            placeholder="Quantity"
            name="quantity"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.quantity}
          />
          {touched.quantity && errors.quantity ? (
            <span className="text-danger ml-3">Only numbers are allowed</span>
          ) : null}
        </Form.Group>
      </Form.Row>

      <Form.Row className="ml-2 mr-2">
        <Form.Group as={Col} controlId="formGridDetails">
          <Form.Label>Details</Form.Label>
          <Form.Control
            placeholder="Details"
            as="textarea"
            name="details"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.details}
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridNotes">
          <Form.Label>Notes</Form.Label>
          <Form.Control
            placeholder="Notes"
            as="textarea"
            name="notes"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.notes}
          />
        </Form.Group>
      </Form.Row>
      <CheckButton />
      <Col sm={7}>
        {confirmDataProcessing ? (
          <ConfirmationToast
            success={true}
            message={"Dados informados com sucesso"}
          />
        ) : null}
      </Col>
    </Form>
  );
};
export default FormMedia;
