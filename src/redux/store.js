import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { reducers } from "./mainReducer";

const RESETACTIONTYPE = "main/resetStore";

const rootReducer = combineReducers(reducers);

const resetableReducer = (state, action) => {
  if (action.type === RESETACTIONTYPE) {
    state = undefined;
  }

  return rootReducer(state, action);
};

export const store = configureStore({
  reducer: resetableReducer,
});

export const resetStore = () => {
  store.dispatch({ type: RESETACTIONTYPE });
};
