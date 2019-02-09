import { put, takeLatest, all } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import * as actions from "./constanst";
//import * as authActions from "../auth/constanst";
import Api from '../../../common/api';

function* fetchGetPlaylist(data) {
  const data = yield Api.get('/user/playlist')
  .then(response => response.json())
  .catch(error => { return { state: 'ERROR', data: error } });

    if(response.success){
        yield put({ type: actions.GET_PLAYLIST_SUCCESS });
    //    yield put({ type: authActions.GET_PERMISSIONS_ACTION });
    } else {
        yield put({ type: actions.GET_PLAYLIST_FAILED })
        yield put(stopSubmit('getPlaylist', { _error: 'Tenemos un problema, intentalo más tarde' }));
    }
}

function* ActionWatcher() {
  yield takeLatest(actions.GET_PLAYLIST, fetchGetPlaylist)
}

export default function* PlayListSaga() {
  yield all([
    ActionWatcher(),
  ]);
}
