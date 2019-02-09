import { put, takeLatest, all } from 'redux-saga/effects';
import { stopSubmit } from 'redux-form';

import * as actions from "./constanst";
//import * as authActions from "../auth/constanst";
import Api from '../../../common/api';

function* fetchSignupPaymentPlan(data) {
  const data = yield Api.post('/user/payment')
  .then(response => response.json())
  .catch(error => { return { state: 'ERROR', data: error } });

    if(response.success){
        yield put({ type: actions.PLAN_PAYMENT_SIGNUP_SUCCESS });
    //    yield put({ type: authActions.GET_PERMISSIONS_ACTION });
    } else {
        yield put({ type: actions.PLAN_PAYMENT_SIGNUP_FAILED })
        yield put(stopSubmit('signupPlanPayment', { _error: 'Tenemos un problema, intentalo más tarde' }));
    }
}

function* ActionWatcher() {
  yield takeLatest(actions.PLAN_PAYMENT_SIGNUP, fetchSignupPaymentPlan)
}

export default function* PlanPaymentSaga() {
  yield all([
    ActionWatcher(),
  ]);
}
