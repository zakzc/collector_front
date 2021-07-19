import React from "react";
import { useDispatch } from "react-redux";
import { useFormik } from "formik";
// comps
import CheckButton from "../views/buttons/checkButton";
// ui
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
// utils
//import adjustFormValues from "../../../utils/adjustFormValues";
import validationSchema from "../../utils/userSchema";
// store
import { register, login } from "../../../store/users";
import { useHistory } from "react-router-dom";

const EnterForm = ({ mode }) => {
  const dispatch = useDispatch();
  let history = useHistory();
  ///
  const adjustedValues = (data) => {
    return { email: data.email, password: data.password };
  };
  ///
  const { handleSubmit, handleChange, handleBlur, values, touched, errors } =
    useFormik({
      initialValues: {
        email: "",
        password: "",
        name: "",
      },
      validationSchema,
      onSubmit: (values) => {
        if (mode === true) {
          dispatch(register(values));
        } else if (mode === false) {
          dispatch(login(adjustedValues(values)));
        }
        history.push("/");
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
            <Form.Label>
              Password{" "}
              <span className="text-white-50">
                {" "}
                (Minimum of 4, maximum of 70 characters)
              </span>
            </Form.Label>
            <Form.Control
              placeholder="Password"
              type="password"
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

          {mode === false ? null : (
            <>
              <Form.Group as={Col} controlId="formGridTitle">
                <Form.Label>Name</Form.Label>
                <Form.Control
                  placeholder="Name"
                  as="textarea"
                  name="name"
                  className="text-black-50"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.name}
                />
              </Form.Group>
              {touched.name && errors.name ? (
                <span className="text-danger ml-3">{errors.name}</span>
              ) : null}
            </>
          )}
        </Col>
      </Form.Row>
      <br />
      <CheckButton />
    </Form>
  );
};
export default EnterForm;
