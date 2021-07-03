import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  delTask,
  getTaskList,
  changeStatus,
  filterTodo,
  setTaskSelected,
  updateTodo,
} from "src/redux/actions/MyToDoActions";
import { SemipolarLoading } from "react-loadingg";
import TaskButton from "./TaskButton";
import MyTodoFilter from "../MyTodoFilter";
import ModalUpdateTask from "./ModalUpdateTask";

export default function MyTodoListTask() {
  const dispatch = useDispatch();

  const [modalUpdate, setModalUpdate] = useState(false);
  const toggleUpdate = () => setModalUpdate(!modalUpdate);

  const { taskList, taskSelected, isLoading, filter } = useSelector(
    (state) => state.todo
  );

  useEffect(() => {
    dispatch(getTaskList());
  }, []);

  const handleDelTodo = (id) => {
    dispatch(delTask(id));
  };

  const handleChangeStatus = (id) => {
    dispatch(changeStatus(id));
    //Sử dụng api có giới hạn nên khi reload lại trang nó sẽ vẫn lấy status ở trên server, hiện tại vẫn chưa up được status mới lên
  };

  //Dựa vào giá trị filter lấy từ store để lọc ra những todo cần lấy
  const filterData =
    filter === "all"
      ? taskList
      : taskList?.filter((item) => {
          if (filter === "complete") {
            return item.status === true;
          }
          if (filter === "uncomplete") {
            return item.status === false;
          }
        });
  const handleFilter = (value) => {
    dispatch(filterTodo(value));
  };

  const getTaskSelected = (itemSelected) => {
    dispatch(setTaskSelected(itemSelected));
    toggleUpdate();
  };
  const handleUpdate = (item) => {
    toggleUpdate();
    dispatch(updateTodo(item));
  };

  // console.log(taskList)
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
          <MyTodoFilter handleFilter={handleFilter} />

          <div className="todoList__detail container">
            {filterData?.map((item) => (
              <div className="todoList__item d-flex" key={item.id}>
                <div className="todoList__taskName">
                  <span
                    style={{
                      textDecoration:
                        item.status !== true ? "none" : "line-through",
                    }}
                  >
                    {item.taskName}{" "}
                  </span>
                </div>
                <TaskButton
                  data={item}
                  handleDelTodo={handleDelTodo}
                  getTaskSelected={getTaskSelected}
                  handleChangeStatus={handleChangeStatus}
                />
              </div>
            ))}
            <ModalUpdateTask
              dataSelected={taskSelected}
              modalUpdate={modalUpdate}
              toggleUpdate={toggleUpdate}
              handleUpdate={handleUpdate}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
