import * as actions from "./constanst";

export const getReservation = () => ({
  type: actions.GET_RESERVATION,
});

export const getReservationSuccess = (user) => ({
  type: actions.GET_RESERVATION_SUCCESS,
  user
});

export const getReservationFailed = (error) => ({
  type: actions.GET_RESERVATION_FAILED,
  error
});

