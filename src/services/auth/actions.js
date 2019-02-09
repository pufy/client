import * as actions from "./constanst";

export const loginAction = (email, password) => ({
  type: actions.LOGIN_ACTION,
  email,
  password
});

export const onLoginSuccess = (data) => ({
  type: actions.LOGIN_SUCCESS,
  data
});

export const onLoginFailed = (error) => ({
  type: actions.LOGIN_FAILED,
  error
});

export const logout = () => ({
  type: actions.LOGOUT
});

export const finishSignup = () => ({
  type: actions.FINISH_SIGNUP
});

export const signupAction = (data) => ({
  type: actions.SIGNUP_ACTION,
  data
});

export const onSignupSuccess = (data) => ({
  type: actions.SIGNUP_SUCCESS,
  data
});

export const onSignupFailed = (error) => ({
  type: actions.SIGNUP_FAILED,
  error
});

export const getPermissionsAction = () => ({
  type: actions.GET_PERMISSIONS_ACTION
});

export const onGetPermissionsSuccess = (data) => ({
  type: actions.GET_PERMISSIONS_SUCCESS,
  data
});

export const onGetPermissionsFailed = (error) => ({
  type: actions.GET_PERMISSIONS_FAILED,
  error
});
