import { fork, all } from 'redux-saga/effects';

import AuthSaga from '../services/auth/saga';
import UserSaga from '../services/profile/saga';
import EventSaga from '../services/event/saga';
import ReservationSaga from '../services/reservation/saga';
import StadisticsSaga from '../services/statistics/saga';


export default function* rootSaga () {
    yield all([
        fork(AuthSaga),
        fork(UserSaga),
        fork(EventSaga),
        fork(ReservationSaga),
        fork(StadisticsSaga)
        
    ]);
}