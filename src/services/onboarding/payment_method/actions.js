import * as actions from "./constanst";

export const signupPaymentMethod = () => ({
  type: actions.PAYMENT_METHOD_SIGNUP,
});

export const signupPaymentMethodSuccess = (data) => ({
  type: actions.PAYMENT_METHOD_SIGNUP_SUCCESS,
  data
});

export const signupPaymentMethodFailed = (error) => ({
  type: actions.PAYMENT_METHOD_SIGNUP_FAILED,
  error
});