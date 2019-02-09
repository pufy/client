import * as actions from "./constanst";

export const getStadistics = () => ({
  type: actions.GET_STADISTICS,
});

export const getStadisticsSuccess = (user) => ({
  type: actions.GET_STADISTICS_SUCCESS,
  user
});

export const getStadisticsFailed = (error) => ({
  type: actions.GET_STADISTICS_FAILED,
  error
});

