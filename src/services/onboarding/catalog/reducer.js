import * as actions from "./constanst";

const stateInit = { 
  loading: false,
  error: undefined
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case actions.SIGNUP_CATALOG:
      return { ...state, loading: true, error: undefined };

    default:
      return state;
  }
};

export default reducer;
