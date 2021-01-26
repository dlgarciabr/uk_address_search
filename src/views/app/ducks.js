// views/app/ducks.js
import moment from "moment";

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
  reminders: [
    {
      id: Math.random() * 10,
      description: "note",
      datetime: moment().hour(7),
      color: "#DF74DA",
      city: "Rio de Janeiro",
    },
    {
      id: Math.random() * 10,
      description: "note aaa",
      datetime: moment().date(10).hour(1),
      color: "#74DF8B",
      city: "Melbourne",
    },
    {
      id: Math.random() * 10,
      description: "note zds",
      datetime: moment().hour(5),
      color: "#74DF8B",
      city: "Valleta",
    },
    {
      id: Math.random() * 10,
      description: "note bbb",
      datetime: moment().date(25).hour(11),
      color: "#714D55",
      city: "San Francisco",
    },
    {
      id: Math.random() * 10,
      description: "note dddd",
      datetime: moment().date(29).hour(10),
      color: "#DF74DA",
      city: "Belo Horizonte",
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
export const showSuccessMessage = () => ({
  type: types.ENQUEUE_SNACKBAR,
  payload: {
    message: messages.OPERATION_SUCCESSFULL,
    variant: "success",
    key: new Date().getTime(),
  },
});

export const showErrorMessage = (message) => ({
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
