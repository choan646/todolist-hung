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
  FILTER_TODO,
  SET_TASK_SELECTED,
  UPDATE_TASK_REQUEST,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
} from "../constants/MyTodoConstants";

const initialState = {
  taskList: [],
  taskSelected: {},
  isLoading: false,
  error: null,
  filter: "all",
};

function todoReducer(state = initialState, action) {
  switch (action.type) {
    //GET
    case GET_TASKLIST_REQUEST: {
      return { ...state, isLoading: true, error: null };
    }
    case GET_TASKLIST_SUCCESS: {
      return { ...state, isLoading: false, taskList: action.payload.data };
    }
    case GET_TASKLIST_FAILURE: {
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    }
    //Selected
    case SET_TASK_SELECTED:
      return { ...state, taskSelected: action.payload, isLoading: false };

    //ADD
    case ADD_TASK_REQUEST:
      return { ...state, isLoading: true, error: null };
    case ADD_TASK_SUCCESS:
      const taskListUpdate = [...state.taskList, action.payload.data.data];
      return {
        ...state,
        isLoading: false,
        taskList: taskListUpdate,
      };
    case ADD_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    //DEL
    case DEL_TASK_REQUEST:
      return { ...state, isLoading: true, error: null };
    case DEL_TASK_SUCCESS: {
      const { id } = action.payload.data.data.id;
      const taskListUpdate = state.taskList.filter((item) => item.id !== id);
      return { ...state, isLoading: false, taskListUpdate };
    }
    case DEL_TASK_FAILURE:
      return { ...state, isLoading: false, error: action.payload.error };

    //CHANGE status
    case CHANGE_STATUS_REQUEST:
      return { ...state, isLoading: true, error: null };
    case CHANGE_STATUS_SUCCESS: {
      const { id } = action.payload.data.data;
      const taskListUpdate = state.taskList.map((item) => {
        if (item.id === id) {
          return { ...item, status: !item.status };
        }
        return item;
      });
      return { ...state, isLoading: false, taskList: taskListUpdate };
    }
    case CHANGE_STATUS_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    //FILTER
    case FILTER_TODO: {
      const { status } = action.payload;
      return { ...state, filter: status };
    }
    //UPDATE
    case UPDATE_TASK_REQUEST:
      return { ...state, isLoading: true, error: null };
    case UPDATE_TASK_SUCCESS: {
      const { id } = action.payload.value;
      const taskListUpdate = state.taskList.map((item) => {
        if (item.id === id) {
          return { ...item, taskName: action.payload.value.taskName };
        }
        return item;
      });
      return { ...state, isLoading: false, taskList: taskListUpdate };
    }
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };

    default:
      return state;
  }
}
export default todoReducer;
