import { put, takeLatest, all } from 'redux-saga/effects';

import * as actions from "./constanst";
import Api from '../../common/api';

function* fetchGetStadistics() {
  const data = yield Api.get('')
    .then(response => response.json())
    .catch(error => { return { state: 'ERROR', data: error } });
  
  if(data.success){
    yield put({ type: actions.GET_STADISTICS_SUCCESS, stadistics: data.payload });
  } else
    yield put({ type: actions.GET_STADISTICS_FAILED, error: data })
}

function* ActionWatcher() {
  yield takeLatest(actions.GET_STADISTICS, fetchGetStadistics)
}

export default function* root() {
  yield all([
    ActionWatcher()
  ]);
}