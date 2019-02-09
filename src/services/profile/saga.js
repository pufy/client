import { put, takeLatest, all } from 'redux-saga/effects';

import * as actions from "./constanst";
import Api from '../../common/api';

function* fetchGetProfile() {
  const data = yield Api.get('/user/profile')
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });
  
  if(data.success){
    yield put({ type: actions.GET_PROFILE_SUCCESS, user: data.payload });
  } else
    yield put({ type: actions.GET_PROFILE_FAILED, error: data })
}

function* ActionWatcher() {
  yield takeLatest(actions.GET_PROFILE, fetchGetProfile)
}

export default function* root() {
  yield all([
    ActionWatcher()
  ]);
}