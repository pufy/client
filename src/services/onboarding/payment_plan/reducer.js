import * as actions from "./constanst";

const stateInit = { 
  loading: false,
  error: undefined
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case actions.PLAN_PAYMENT_SIGNUP:
      return { ...state, loading: true, error: undefined };
    default:
      return state;
  }
};

export default reducer;
