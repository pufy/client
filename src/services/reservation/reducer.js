import * as actions from "./constanst";

const stateInit = { 
  user: undefined,
  languages: []
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case actions.GET_RESERVATION:
      return { ...state, loading: true };
      default:
      return state;
  }
};

export default reducer;
