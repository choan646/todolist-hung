import React from "react";
import { green } from "@material-ui/core/colors";
import EditIcon from "@material-ui/icons/Edit";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";

export default function TaskButton({
  data,
  handleDelTodo,
  handleChangeStatus,
  getTaskSelected,
}) {
  return (
    <div className="todoList__button">
      <IconButton
        size="small"
        variant="outlined"
        style={{
          marginRight: "10px",
          width: "47px",
          height: "47px",
        }}
        type="button"
        onClick={() => handleChangeStatus(data.id)}
      >
        {data.status === false ? (
          <DoneIcon style={{ color: green[500] }} />
        ) : (
          <ClearIcon color="secondary" />
        )}
      </IconButton>

      <IconButton
        size="small"
        variant="outlined"
        color="primary"
        onClick={() => getTaskSelected(data)}
        style={{
          marginRight: "10px",
          width: "47px",
          height: "47px",
        }}
      >
        <EditIcon />
      </IconButton>

      <IconButton
        variant="contained"
        color="secondary"
        type="button"
        onClick={() => handleDelTodo(data.id)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );
}
