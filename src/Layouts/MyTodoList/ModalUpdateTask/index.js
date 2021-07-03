import React from "react";
import { Form, Formik } from "formik";
import { FormGroup, Modal } from "reactstrap";
import { Button } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export default function ModalUpdateTask({
  dataSelected,
  modalUpdate,
  toggleUpdate,
  handleUpdate,
}) {
  return (
    <Modal isOpen={modalUpdate} toggle={toggleUpdate} id="modalUpdate">
      <h5><i>Edit Todo</i></h5>
      <Formik
        initialValues={{
          taskName: dataSelected.taskName,
          id: dataSelected.id,
          status: dataSelected.status,
        }}
        onSubmit={handleUpdate}
        render={(formikProps) => (
          <Form className="form__updateTodo row mt-5">
            <FormGroup className="col-6">
              <TextField
                label="ID"
                defaultValue={dataSelected.id}
                variant="outlined"
                disabled
                size="small"
                className="form-control"
                name="id"
              />
            </FormGroup>
            <FormGroup className="col-6">
              <TextField
                label="Status"
                defaultValue={
                  dataSelected.status === true ? "Complete" : "Uncomplete"
                }
                variant="outlined"
                disabled
                size="small"
                className="form-control"
                name="status"
              />
            </FormGroup>
            <FormGroup className="col-12 mt-4">
              <TextField
                label="To do"
                defaultValue={dataSelected.taskName}
                variant="outlined"
                size="small"
                required
                className="form-control need__ups"
                name="taskName"
                onChange={formikProps.handleChange}
              />
            </FormGroup>
            <div
              className="col-12"
              style={{ marginTop: "40px", textAlign: "center" }}
            >
              <Button
                style={{ marginRight: "40px" }}
                variant="contained"
                color="primary"
                type="submit"
              >
                Sửa
              </Button>
              <Button
                variant="outlined"
                color="secondary"
                onClick={toggleUpdate}
              >
                Hủy Bỏ
              </Button>
            </div>
          </Form>
        )}
      />
    </Modal>
  );
}
