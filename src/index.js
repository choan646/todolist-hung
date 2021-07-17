import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./styles/index";
import rootReducer from "./redux/reducers/rootReducer";
import reportWebVitals from "./reportWebVitals";
// Setup redux
import { createStore, applyMiddleware, compose } from "redux";
import { Provider } from "react-redux";
import thunk from "redux-thunk";

const middleware = [thunk];

const store = createStore(rootReducer, compose(applyMiddleware(...middleware)));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);
reportWebVitals();
