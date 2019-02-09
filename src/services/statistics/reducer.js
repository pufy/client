import * as actions from "./constanst";

const stateInit = { 
  loading: false,
  error: undefined
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case actions.GET_STADISTICS:
      return { ...state, loading: true };
      default:
      return state;
  }
};

export default reducer;
