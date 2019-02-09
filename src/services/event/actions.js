import * as actions from "./constanst";

export const getEvent = () => ({
  type: actions.GET_EVENT,
});

export const getEventSuccess = (user) => ({
  type: actions.GET_EVENT_SUCCESS,
  user
});

export const getEventFailed = (error) => ({
  type: actions.GET_EVENT_FAILED,
  error
});

