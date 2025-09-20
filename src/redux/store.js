import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

import rootReducer from "./root-reducer";

const Middleware = [logger];

const store = createStore(rootReducer, applyMiddleware(thunk, ...Middleware));

export default store;
