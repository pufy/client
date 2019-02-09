import * as actions from "./constanst";

const initState = {
  continentSelected: "default"
};

const reducerMap = (state = initState, action) => {
  switch (action.type) {
    case actions.SET_ZOOM_CONTINENT:
      return { ...state, continentSelected: action.continent };
    default:
      return state;
  }
};

export default reducerMap;
