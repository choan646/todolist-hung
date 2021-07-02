import axios from "axios";
import {
  GET_TASKLIST_REQUEST,
  GET_TASKLIST_SUCCESS,
  GET_TASKLIST_FAILURE,
  ADD_TASK_REQUEST,
  ADD_TASK_SUCCESS,
  ADD_TASK_FAILURE,
  DEL_TASK_REQUEST,
  DEL_TASK_SUCCESS,
  DEL_TASK_FAILURE,
  CHANGE_STATUS_REQUEST,
  CHANGE_STATUS_SUCCESS,
  CHANGE_STATUS_FAILURE,
  FILTER_TODO
} from "../constants/MyTodoConstants";
import Swal from "sweetalert2";

export function getTaskList() {
  return async (dispatch) => {
    dispatch({ type: GET_TASKLIST_REQUEST });
    try {
      const { data } = await axios({
        method: "GET",
        url: "https://60dc4f9dc2b6280017feb8a9.mockapi.io/taskList",
      });
      dispatch({ type: GET_TASKLIST_SUCCESS, payload: { data } });
    } catch (error) {
      dispatch({
        type: GET_TASKLIST_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}

export function addTask(value) {
  return async (dispatch) => {
    dispatch({ type: ADD_TASK_REQUEST });
    try {
      const data = await axios({
        method: "POST",
        url: "https://60dc4f9dc2b6280017feb8a9.mockapi.io/taskList",
        data: { taskName: value },
      });
      Swal.fire("Thêm Thành Công !");
      dispatch({ type: ADD_TASK_SUCCESS, payload: { data } });
      dispatch(getTaskList());
    } catch (error) {
      Swal.fire("Có lỗi xảy ra!");
      dispatch({
        type: ADD_TASK_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}

export function delTask(id) {
  return async (dispatch) => {
    dispatch({ type: DEL_TASK_REQUEST });
    try {
      const data = await axios({
        method: "DELETE",
        url: `https://60dc4f9dc2b6280017feb8a9.mockapi.io/taskList/${id}`,
      });
      Swal.fire("Xóa Thành Công !");
      // dispatch({ type: DEL_TASK_SUCCESS, payload: { data } });
      //Không cần thiết dispatch lên, vì action này là action normal, api đã giải quyết việc delete
      dispatch(getTaskList());
    } catch (error) {
      Swal.fire("Có lỗi xảy ra!");
      dispatch({
        type: DEL_TASK_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}

export function changeStatus(id) {
  return async (dispatch) => {
    dispatch({ type: CHANGE_STATUS_REQUEST });
    try {
      const data = await axios({
        method: 'PUT',
        url: `https://60dc4f9dc2b6280017feb8a9.mockapi.io/taskList/${id}`,
      });
      dispatch({ type: CHANGE_STATUS_SUCCESS, payload: { data } });
    } catch (error) {
      Swal.fire("Có lỗi xảy ra!");
      dispatch({
        type: CHANGE_STATUS_FAILURE,
        payload: { error: error.response?.data },
      });
    }
  };
}

export const filterTodo = (status) => {
  return {
    type: FILTER_TODO,
    payload: {
      status,
    },
  };
};