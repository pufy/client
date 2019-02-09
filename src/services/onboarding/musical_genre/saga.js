import { put, takeLatest, all } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import * as actions from "./constanst";
import Api from '../../../common/api';

function* fetchSignupMusicalGenre(data) {
  const data = yield Api.post('')
  .then(response => response.json())
  .catch(error => { return { state: 'ERROR', data: error } });

    if(response.success){
        yield put({ type: actions.SIGNUP_MUSICAL_GENRE_SUCCESS });
    } else {
        yield put({ type: actions.SIGNUP_MUSICAL_GENRE_FAILED })
        yield put(stopSubmit('signupPlanPayment', { _error: 'Tenemos un problema, intentalo más tarde' }));
    }
}

