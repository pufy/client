import { put, takeLatest, all } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import Api from '../../common/api';
import Token from '../../common/token';
import * as actions from "./constanst";

function* fetchLogin(data) {
  const response = yield Api.post('/auth', { correo: data.email, contrasena: data.password })
    .then(response => response.json())
    .catch(error => error);

  if(response.success){
    localStorage.setItem('token', response.payload);
    yield put({ type: actions.GET_PERMISSIONS_ACTION });
    yield put({ type: actions.LOGIN_SUCCESS, token: response.payload, token_decode: Token.decode() });
  } else if(response.error === 'USER_INVALID'){
    yield put({ type: actions.LOGIN_FAILED })
    yield put(stopSubmit('login', { _error: 'El usuario o contraseña no coinciden' }));
  } else {
    yield put({ type: actions.LOGIN_FAILED })
    yield put(stopSubmit('login', { _error: 'Tenemos un problema, intentalo más tarde' }));
  }
}

function* fetchSignup(data) {
  if(data.data.confirm_password === data.data.contrasena){
    const response = yield Api.post('/auth/signup', { ...data.data, fecha_nacimiento: data.data.fecha_nacimiento + 'T00:00:00.000Z' })
      .then(response => response.json())
      .catch(error => error);
      
    if(response.success){
      yield put({ type: actions.SIGNUP_SUCCESS });
    } else if(response.error === 'DUPLICATE_EMAIL') {
      yield put({ type: actions.SIGNUP_FAILED, error: response })
      yield put(stopSubmit('signup', { _error: response.message }));
    } else {
      yield put({ type: actions.SIGNUP_FAILED, error: response })
      yield put(stopSubmit('signup', { _error: 'Tenemos un problema en el servidor' }));
    }
  }
  else 
    yield put(stopSubmit('signup', { _error: 'Las contraseñas no coinciden' }));
}

function* fetchGetPermissions() {
  const response = yield Api.get('/user/permissions')
    .then(response => response.json())
    .catch(error => error);

  if(response.success)
    yield put({ type: actions.GET_PERMISSIONS_SUCCESS, permissions: response.payload.permissions, rols: response.payload.rols });
  else 
    yield put({ type: actions.GET_PERMISSIONS_FAILED })
}

const fetchLogout = () => localStorage.clear();

function* ActionWatcher() {
  yield takeLatest(actions.LOGIN_ACTION, fetchLogin)
  yield takeLatest(actions.SIGNUP_ACTION, fetchSignup)
  yield takeLatest(actions.GET_PERMISSIONS_ACTION, fetchGetPermissions)
  yield takeLatest(actions.LOGOUT, fetchLogout)
}

export default function* AuthSaga() {
  yield all([
    ActionWatcher(),
  ]);
}
