import { combineReducers } from "redux";
import todoReducer from './MyToDoReducer'

const rootReducer = combineReducers({
  // nơi khai báo reducers con
  todo: todoReducer,
});
export default rootReducer;
