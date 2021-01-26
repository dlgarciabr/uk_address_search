import { applyMiddleware, createStore } from "redux";
import multi from "redux-multi"; //call multiple action from an action creator
import promise from "redux-promise"; //allow call async action creators
import thunk from "redux-thunk"; //allow async async action creators

import rootReducer from "./reducers";

export const initializeStore = (enableDevTools) => {
  const store = applyMiddleware(multi, thunk, promise)(createStore)(
    rootReducer
  );
  store.dispatch({ type: "" });
  return store;
};
