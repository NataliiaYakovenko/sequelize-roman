import React from "react";
import Modal from "react-modal";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { GROUP_VALIDATION_SCHEMA} from "../../schemas";
import { createGroup } from "../../api";

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
  name: "",
  description: "",
};

const AddGroupFormModal = (props) => {
  const handelSubmitToFormik = async (values, actions) => {
    const serverResponse = await createGroup(values);
    console.log(serverResponse);
    props.setIsModalOpen(false);
    await props.loadGroups()
    actions.resetForm();
  };

  return (
    <Modal
      isOpen={props.isModalOpen}
      onRequestClose={() => props.setIsModalOpen(false)}
      style={customStyles}
    >
      <h1>Type informatiom about group</h1>

      <Formik
        initialValues={initialValues}
        onSubmit={handelSubmitToFormik}
        validationSchema={GROUP_VALIDATION_SCHEMA}
      >
        {(formikProps) => {
          return (
            <Form style={{ display: "flex", flexDirection: "column" }}>
              <Field name="name" placeholder="picture" />
              <ErrorMessage name="name" component="p" />

              <Field name="description" placeholder="this a group of picture" />
              <ErrorMessage name="description" component="p" />

             
              <button type="submit">ADD GROUP</button>
            </Form>
          );
        }}
      </Formik>

      <button onClick={() => props.setIsModalOpen(false)}>Close</button>
    </Modal>
  );
};

export default AddGroupFormModal;
