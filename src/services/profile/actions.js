import * as actions from "./constanst";

export const getProfile = () => ({
  type: actions.GET_PROFILE,
});

export const getProfileSuccess = (user) => ({
  type: actions.GET_PROFILE_SUCCESS,
  user
});

export const getProfileFailed = (error) => ({
  type: actions.GET_PROFILE_FAILED,
  error
});

