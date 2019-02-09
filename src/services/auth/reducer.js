import * as actions from "./constanst";
import Token from '../../common/token';

const stateInit = { 
  authentication: Token.isTokenValid(),
  rols: Token.isTokenValid()? Token.decode().roles: ['invited'],
  token_decode: Token.isTokenValid()? Token.decode(): undefined, 
  permissions: undefined,
  laoding: false
};

const reducerAuth = (state = stateInit, action) => {
  switch (action.type) {
    case actions.LOGIN_ACTION:
      return { ...state, loading: true };
    case actions.LOGIN_SUCCESS:
      return { 
        ...state, 
        token: action.token, 
        token_decode: action.token_decode, 
        authentication: true, 
        loading: false,
      }
    case actions.LOGIN_FAILED: 
      return { ...state, loading: false }
    case actions.LOGOUT:
      return { ...state, authentication: false, rols: ['invited'], token_decode: undefined, token: undefined }

    case actions.FINISH_SIGNUP:
      return { ...state, reset_form_signup: false };
    case actions.SIGNUP_ACTION:
      return { ...state, loading: true };
    case actions.SIGNUP_SUCCESS:
      return { ...state, loading: false, reset_form_signup: true }
    case actions.SIGNUP_FAILED: 
      return { ...state, loading: false, error: action.error }

    case actions.GET_PERMISSIONS_ACTION:
      return { ...state };
    case actions.GET_PERMISSIONS_SUCCESS:
      return { ...state, permissions: action.permissions, rols: action.rols }
    case actions.GET_PERMISSIONS_FAILED: 
      return { ...state, error: action.error, permissions: [] }

    default:
      return state;
  }
};

export default reducerAuth;
