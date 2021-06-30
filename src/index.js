import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "./styles/index.js";

//Setup redux
import { createStore, applyMiddleware, compose } from "redux";


//Ket noi react voi redux lai voi nhau
import { Provider } from "react-redux";
// import rootReducer
import rootReducer from "./redux/reducers/rootReducer";
//Setup redux-thunk
import thunk from "redux-thunk";

const middleware = applyMiddleware(thunk);

//Gộp middleware và rudux devtool lại làm 1
const enhancer = compose(
  middleware,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

//Tao store tu reducer
const store = createStore(rootReducer, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
