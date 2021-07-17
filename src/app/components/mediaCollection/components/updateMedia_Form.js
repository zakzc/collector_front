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
import formatDateView from "../../../utils/formatDateView";
import validationSchema from "../../../utils/mediaSchema";
// store
import { updateMedia } from "../../../../store/medias";
import {
  setCurrentMediaCRUD,
  setCurrentMediaView,
  setDataWasSent,
} from "../../../../store/mediaContext";

const FormUpdateMedia = () => {
  // * data
  const dispatch = useDispatch();
  const currentMediaView = useSelector(
    (state) => state.mediaContext[0].currentMediaView
  );

  const currentItemId = useSelector(
    (state) => state.mediaContext[0].currentSelectedItem
  );
  const getItem = useSelector((state) =>
    state.medias.mediasList.filter((item) => item._id === currentItemId)
  );
  const itemToUpdate = getItem[0];

  // data treatment
  let formattedDate = formatDateView(itemToUpdate.dateOfPurchase);
  let processedDate = itemToUpdate.dateOfPurchase.split("-");
  let day = processedDate[2].substring(0, 2);
  let month = processedDate[1];
  let year = processedDate[0];
  ///

  ///
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        title: itemToUpdate.title,
        author: itemToUpdate.author,
        subType: itemToUpdate.subType,
        mediaID: itemToUpdate.mediaID,
        typeOfMedia: currentMediaView,
        price: itemToUpdate.price,
        sellable: itemToUpdate.sellable,
        dayOfPurchase: day,
        monthOfPurchase: month,
        yearOfPurchase: year,
        quantity: itemToUpdate.quantity,
        details: itemToUpdate.details,
        notes: itemToUpdate.notes,
      },
      validationSchema,
      onSubmit: (values) => {
        let adjustedValues = adjustFormValues(values);
        console.log("update triggered: ", values, adjustedValues);
        dispatch(updateMedia(itemToUpdate._id, adjustedValues));
        dispatch(setDataWasSent(true));
        dispatch(setCurrentMediaCRUD("read"));
        dispatch(setCurrentMediaView(currentMediaView));
      },
    });

  // * view
  return (
    <Form onSubmit={handleSubmit} className="m-3">
      <p>
        Only the items that are filled in will be updated. The rest will retain
        its original value.
      </p>
      <div
        style={{
          backgroundColor: "CadetBlue",
        }}
        className="text-white rounded"
      >
        <Form.Row>
          <Col>
            <Form.Group as={Col} controlId="formGridTitle">
              <Form.Label>
                <span className="text-black-50">Title:</span>{" "}
                <span className="text-white">{itemToUpdate.title}</span>
              </Form.Label>
              <Form.Control
                placeholder={itemToUpdate.title}
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
              <Form.Label>
                <span>
                  <span className="text-black-50">Author</span>{" "}
                  <span className="text-white">{itemToUpdate.author}</span>
                </span>
              </Form.Label>
              <Form.Control
                placeholder={itemToUpdate.author}
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
              <Form.Label>
                <span className="text-black-50">subType:</span>{" "}
                <span className="text-white">{itemToUpdate.subType}</span>
              </Form.Label>
              <Form.Control
                placeholder={itemToUpdate.subType}
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
            <span>
              <span className="text-black-50">Media Id:</span>{" "}
              <span className="text-white">{itemToUpdate.mediaID}</span>
            </span>{" "}
            <span className="text-black-50">
              {" "}
              {" ("}
              This is a unique number, it cannot be changed {")"}
            </span>
            {touched.mediaID && errors.mediaID ? (
              <span className="text-danger ml-3">{errors.mediaID}</span>
            ) : null}
          </Form.Group>
        </Form.Row>

        <Form.Row>
          <Form.Group as={Col} controlId="formGridPrice">
            <Col>
              <Form.Label>
                <span className="text-black-50">Price: </span>
                <span className="text-white">{itemToUpdate.price}</span>
              </Form.Label>
              <Form.Control
                placeholder={itemToUpdate.price}
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
            <Form.Label>
              <span className="text-black-50">Quantity:</span>{" "}
              <span className="text-white">{itemToUpdate.quantity}</span>
            </Form.Label>
            <Form.Control
              placeholder={itemToUpdate.quantity}
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
              <Form.Label>
                {" "}
                <span className="text-black-50">Available to sell?</span>{" "}
                {itemToUpdate.sellable ? (
                  <span className="text-white">Yes</span>
                ) : (
                  <span className="text-white">No</span>
                )}
              </Form.Label>
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

        <span className="text-black-50 ml-2">
          {"  "} Date of purchase:{" "}
          <span className="text-white">{formattedDate}</span>{" "}
        </span>
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
                value={day}
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
                value={month}
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
                <span className="text-danger ml-3">
                  {errors.monthOfPurchase}
                </span>
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
                value={year}
              />
              {touched.yearOfPurchase && errors.yearOfPurchase ? (
                <span className="text-danger ml-3">
                  {errors.yearOfPurchase}
                </span>
              ) : null}
            </Col>
          </Form.Group>
        </Form.Row>

        <Form.Row className="ml-2 mr-2">
          <Form.Group as={Col} controlId="formGridDetails">
            <Form.Label>
              {" "}
              <span className="text-black-50">Details</span>
            </Form.Label>
            <Form.Control
              placeholder={itemToUpdate.details}
              as="textarea"
              name="details"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.details}
            />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridNotes">
            <Form.Label>
              {" "}
              <span className="text-black-50">Notes</span>
            </Form.Label>
            <Form.Control
              placeholder={itemToUpdate.notes}
              as="textarea"
              name="notes"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.notes}
            />
          </Form.Group>
        </Form.Row>
      </div>
      <CheckButton />
      <Col sm={7}></Col>
    </Form>
  );
};
export default FormUpdateMedia;
