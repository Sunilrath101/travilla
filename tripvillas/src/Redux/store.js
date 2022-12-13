import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";
import thunk from "redux-thunk";
import { reducer as authReducer } from "./AuthReducer/reducer";
import { reducer as dataReducer } from "./DataReducer/reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootreducer = combineReducers({ authReducer, dataReducer });

export const store = legacy_createStore(
  rootreducer,
  composeEnhancer(applyMiddleware(thunk))
);
