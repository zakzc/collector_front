import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
// comps
import CheckButton from "../../views/buttons/checkButton";
// ui
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// utils
import adjustFormValues from "../../../utils/adjustFormValues";
import validationSchema from "../../../utils/mediaSchema";
// store
import { addMedia } from "../../../../store/medias";
import {
  setCurrentMediaCRUD,
  setCurrentMediaView,
  setDataWasProcessed,
} from "../../../../store/mediaContext";

const FormAdd = () => {
  // * data
  const dispatch = useDispatch();
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );

  ///
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        title: "",
        author: "",
        subType: "",
        mediaID: "",
        typeOfMedia: currentMediaView,
        price: "",
        sellable: "",
        dayOfPurchase: "",
        monthOfPurchase: "",
        yearOfPurchase: "",
        quantity: "",
        details: " ",
        notes: " ",
      },
      validationSchema,
      onSubmit: (values) => {
        let adjustedValues = adjustFormValues(values);
        dispatch(addMedia(adjustedValues));
        dispatch(setDataWasProcessed(true));
        dispatch(setCurrentMediaCRUD("read"));
        dispatch(setCurrentMediaView(currentMediaView));
      },
    });

  // * view
  return (
    <Form onSubmit={handleSubmit} className="m-3">
      <Form.Row>
        <Col>
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Title - Name</Form.Label>
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
              <span className="text-danger ml-3">{errors.price}</span>
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
            <span className="text-danger ml-3">{errors.quantity}</span>
          ) : null}
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
            >
              <option> -- </option>
              <option value={true}>Yes</option>
              <option value={false}>No</option>
            </Form.Control>
            {touched.sellable && errors.sellable ? (
              <span className="text-danger ml-3">{errors.sellable}</span>
            ) : null}
          </Col>
        </Form.Group>
      </Form.Row>

      <p>Date of purchase</p>

      <Form.Row className="mr-2">
        <Form.Group as={Col} controlId="formGridSell">
          <Col>
            <Form.Label>Day</Form.Label>
            <Form.Control
              size="lg"
              custom
              as="select"
              name="dayOfPurchase"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option> -- </option>
              {[...Array(31).keys()].map((i) => (
                <option key={i} value={i + 1}>
                  {i + 1}
                </option>
              ))}
            </Form.Control>
            {touched.dayOfPurchase && errors.dayOfPurchase ? (
              <span className="text-danger ml-3">{errors.dayOfPurchase}</span>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridSell">
          <Col>
            <Form.Label>Month</Form.Label>
            <Form.Control
              size="lg"
              custom
              as="select"
              name="monthOfPurchase"
              onChange={handleChange}
              onBlur={handleBlur}
            >
              <option> -- </option>
              <option value={1}>January</option>
              <option value={2}>February</option>
              <option value={3}>March</option>
              <option value={4}>April</option>
              <option value={5}>May</option>
              <option value={6}>June</option>
              <option value={7}>July</option>
              <option value={8}>August</option>
              <option value={9}>September</option>
              <option value={10}>October</option>
              <option value={11}>November</option>
              <option value={12}>December</option>
            </Form.Control>
            {touched.monthOfPurchase && errors.monthOfPurchase ? (
              <span className="text-danger ml-3">{errors.monthOfPurchase}</span>
            ) : null}
          </Col>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridsubTitle">
          <Col>
            <Form.Label>Year</Form.Label>
            <Form.Control
              placeholder="Year"
              name="yearOfPurchase"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.dateOfPurchase}
            />
            {touched.yearOfPurchase && errors.yearOfPurchase ? (
              <span className="text-danger ml-3">{errors.yearOfPurchase}</span>
            ) : null}
          </Col>
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
      <Col sm={7}></Col>
    </Form>
  );
};
export default FormAdd;
