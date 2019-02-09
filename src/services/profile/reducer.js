import * as actions from "./constanst";

const stateInit = { 
  user: undefined,
  languages: []
};

const reducer = (state = stateInit, action) => {
  switch (action.type) {
    case actions.GET_PROFILE:
      return { ...state, loading: true };
    case actions.GET_PROFILE_SUCCESS:
      return { ...state, loading: false, user: action.user };
    case actions.GET_PROFILE_FAILED:
      return { ...state, loading: false, error: action.error };

      default:
      return state;
  }
};

export default reducer;
