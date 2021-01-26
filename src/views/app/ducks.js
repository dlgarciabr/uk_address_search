// views/app/ducks.js

import messages from "../../utils/messages";

// action types
export const types = {
  ENQUEUE_SNACKBAR: "views/app/ENQUEUE_SNACKBAR",
  CLOSE_SNACKBAR: "views/app/CLOSE_SNACKBAR",
  REMOVE_SNACKBAR: "views/app/REMOVE_SNACKBAR",
  REMINDER_CREATED: "views/app/REMINDER_CREATED",
  REMINDER_EDITED: "views/app/REMINDER_EDITED",
};

// initial state
export const initialState = {
  notifications: [],
  lastResults: [
    {
      street: "a",
      city: "wellington",
    },
  ],
};

// reducers
export default (state = initialState, action) => {
  switch (action.type) {
    case types.ENQUEUE_SNACKBAR:
      return {
        ...state,
        notifications: [action.payload],
      };
    case types.REMINDER_CREATED:
      return {
        ...state,
        reminders: [...state.reminders, action.payload.reminder],
      };
    case types.REMINDER_EDITED:
      const payloadReminder = action.payload.reminder;
      const nextReminders = [...state.reminders];
      nextReminders[
        nextReminders.findIndex((r) => r.id === payloadReminder.id)
      ] = payloadReminder;
      return {
        ...state,
        reminders: [...nextReminders],
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

export const createReminder = (reminder) => ({
  type: types.REMINDER_CREATED,
  payload: {
    reminder: reminder,
  },
});

export const editReminder = (reminder) => ({
  type: types.REMINDER_EDITED,
  payload: {
    reminder: reminder,
  },
});
