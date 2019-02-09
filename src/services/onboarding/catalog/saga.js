import { put, takeLatest, all } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import * as actions from "./constanst";
//import * as authActions from "../auth/constanst";
import Api from '../../../common/api';

function* fetchSignupCatalog(data) {
  const data = yield Api.post('/user/catalog')
  .then(response => response.json())
  .catch(error => { return { state: 'ERROR', data: error } });

    if(response.success){
        yield put({ type: actions.SIGNUP_CATALOG_SUCCESS });
    //    yield put({ type: authActions.GET_PERMISSIONS_ACTION });
    } else {
        yield put({ type: actions.SIGNUP_CATALOG_FAILED })
        yield put(stopSubmit('signupCatalog', { _error: 'Tenemos un problema, intentalo más tarde' }));
    }
}

function* ActionWatcher() {
  yield takeLatest(actions.SIGNUP_CATALOG, fetchSignupCatalog)
}

export default function* CatalogSaga() {
  yield all([
    ActionWatcher(),
  ]);
}
