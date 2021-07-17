import React from "react";
//import { useSelector, useDispatch } from "react-redux";
import { useFormik } from "formik";
// comps
import CheckButton from "../../components/views/buttons/checkButton";
// ui
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// utils
//import adjustFormValues from "../../../utils/adjustFormValues";
//import validationSchema from "../../../utils/mediaSchema";
// store

const LogInForm = () => {
  // * data

  ///
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
      },
      // validationSchema,
      onSubmit: (values) => {
        console.log("values: ", values);
        // let adjustedValues = adjustFormValues(values);
        // dispatch(addMedia(adjustedValues));
        // dispatch(setDataWasSent(true));
        // dispatch(setCurrentMediaCRUD("read"));
        // dispatch(setCurrentMediaView(currentMediaView));
      },
    });

  // * view
  return (
    <Form onSubmit={handleSubmit} className="m-3">
      <Form.Row>
        <Col></Col>
        <Col
          style={{
            backgroundColor: "CadetBlue",
          }}
          className="text-white rounded"
        >
          <Form.Group as={Col} controlId="formGridTitle">
            <Form.Label>Email</Form.Label>
            <Form.Control
              placeholder="Email"
              as="textarea"
              name="email"
              className="text-black-50"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.title}
            />
          </Form.Group>
          {touched.email && errors.email ? (
            <span className="text-danger ml-3">{errors.email}</span>
          ) : null}

          <Form.Group as={Col} controlId="formGridAuthor">
            <Form.Label>Password</Form.Label>
            <Form.Control
              placeholder="Password"
              as="textarea"
              name="password"
              className="text-black-50"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.author}
            />
          </Form.Group>
          {touched.password && errors.password ? (
            <span className="text-danger ml-3">{errors.password}</span>
          ) : null}
        </Col>
        <Col></Col>
      </Form.Row>
      <br />
      <CheckButton />
      <Col sm={7}></Col>
    </Form>
  );
};
export default LogInForm;
