import * as actions from "./constanst";

export const signupBusinessProfile = (busines_profile) => {
  return {
      type: actions.SIGNUP_BUSINESS_PROFILE,
      busines_profile
  }
};

export const signupBusinessProfileSuccess = (data) => ({
  type: actions.SIGNUP_BUSINESS_PROFILE_SUCCESS,
  data
});

export const signupBusinessProfileFailed = (error) => ({
  type: actions.SIGNUP_BUSINESS_PROFILE_FAILED,
  error
});