import { applyMiddleware, compose, createStore } from "redux";
import thunk from "redux-thunk";
import rootReducers from "./reducers/rootReducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const middleWare = [];
middleWare.push(thunk);

const store = createStore(
  rootReducers,
  composeEnhancers(applyMiddleware(...middleWare))
);

export default store;
