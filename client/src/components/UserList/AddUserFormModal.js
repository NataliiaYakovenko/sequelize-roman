import React from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { USER_VALIDATION_SCHEMA } from "../../schemas";
import { createUser } from "../../api";

Modal.setAppElement("#root");

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    button: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const initialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  birthday: "",
  gender: "",
};

const AddUserFormModal = (props) => {
  const handelSubmitToFormik = async (values, actions) => {
    const serverResponse = await createUser(values);
    console.log(serverResponse);
    props.setIsModelOpen(false);
    actions.resetForm();
  };

  return (
    <Modal
      isOpen={props.isModelOpen}
      onRequestClose={() => props.setIsModelOpen(false)}
      style={customStyles}
    >
      <h1>Type informatiom about user</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmitToFormik}
        validationSchema={USER_VALIDATION_SCHEMA}
      >
        {(formikProps) => {
          return (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <Field name="firstName" placeholder="Taras" />
              <ErrorMessage name="firstName" component="p" />

              <Field name="lastName" placeholder="Shevchenko" />
              <ErrorMessage name="lastName" component="p" />

              <Field name="email" placeholder="sheva@gmail.com" />
              <ErrorMessage name="email" component="p" />

              <Field name="password" type="password" placeholder="Qwerty123" />
              <ErrorMessage name="password" component="p" />

              <Field name="birthday" type="date" />
              <ErrorMessage name="birthday" component="p" />

              <Field name="gender" placeholder="Input your gender" />
              <ErrorMessage name="gender" component="p" />

              <button type="submit">ADD USER</button>
            </Form>
          );
        }}
      </Formik>

      <button onClick={() => props.setIsModelOpen(false)}>Close</button>
    </Modal>
  );
};

export default AddUserFormModal;
