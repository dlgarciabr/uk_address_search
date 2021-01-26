// views/app/ducks.js

import messages from "../../utils/messages";

// action types
export const types = {
  ENQUEUE_SNACKBAR: "views/app/ENQUEUE_SNACKBAR",
  CLOSE_SNACKBAR: "views/app/CLOSE_SNACKBAR",
  REMOVE_SNACKBAR: "views/app/REMOVE_SNACKBAR",
  SEARCH_STARTED: "views/app/SEARCH_STARTED",
  SEARCH_FINISHED: "views/app/SEARCH_FINISHED",
};

// initial state
export const initialState = {
  notifications: [],
  currentResult: null,
  lastResults: [],
};

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [action.payload],
      };
    case types.SEARCH_STARTED:
      return {
        ...state,
        currentResult: null,
        lastResults:
          state.currentResult != null
            ? [...state.lastResults, state.currentResult]
            : state.lastResults,
      };
    case types.SEARCH_FINISHED:
      return {
        ...state,
        currentResult: action.payload.result,
      };
    default:
      return state;
  }
};

// Action Creators
export const getSuccessMessage = () => ({
  type: types.ENQUEUE_SNACKBAR,
  payload: {
    message: messages.OPERATION_SUCCESSFULL,
    variant: "success",
    key: new Date().getTime(),
  },
});

export const getErrorMessage = (message) => ({
  type: types.ENQUEUE_SNACKBAR,
  payload: {
    message: message || messages.OPERATION_ERROR,
    variant: "error",
    key: new Date().getTime(),
  },
});

export const searchStarted = () => ({
  type: types.SEARCH_STARTED,
});

export const searchFinished = (result) => ({
  type: types.SEARCH_FINISHED,
  payload: {
    result,
  },
});
