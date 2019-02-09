import * as actions from "./constanst";

export const signupPaymenPlan = () => ({
  type: actions.PLAN_PAYMENT_SIGNUP,
});

export const signupPaymenPlanSuccess = (data) => ({
  type: actions.PLAN_PAYMENT_SIGNUP_SUCCESS,
  data
});

export const signupPaymenPlanFailed = (error) => ({
  type: actions.PLAN_PAYMENT_SIGNUP_FAILED,
  error
});