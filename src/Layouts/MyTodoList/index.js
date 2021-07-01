import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { delTask, getTaskList,changeStatus } from "src/redux/actions/MyToDoActions";
import { SemipolarLoading } from "react-loadingg";
import TaskButton from "./TaskButton";

export default function MyTodoListTask() {
  const dispatch = useDispatch();
  //Checked task set up
  // const [checked, setChecked] = useState(false);

  const { taskList, isLoading, error } = useSelector((state) => state.todo);

  useEffect(() => {
    dispatch(getTaskList());
  }, []);

  const handleDelTodo = (id) => {
    dispatch(delTask(id));
  };

  const handleChangeStatus = (id) => {
    dispatch(changeStatus(id));
    console.log(id);
  };

  if (isLoading) {
    return (
      <div>
        <SemipolarLoading color="#0487D9" />
      </div>
    );
  }
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 col-md-9 col-lg-7 col-xl-6">
          <div className="todoList__detail container">
            {taskList?.map((item) => (
              <div className="todoList__item d-flex" key={item.id}>
                <div className="todoList__taskName">
                  <span
                    style={{
                      textDecoration:
                        item.status != true ? "none" : "line-through",
                    }}
                  >
                    {item.taskName}{" "}
                  </span>
                </div>
                <TaskButton
                  data={item}
                  handleDelTodo={handleDelTodo}
                  handleChangeStatus={handleChangeStatus}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
