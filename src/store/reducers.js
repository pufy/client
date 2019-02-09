import { combineReducers } from 'redux'
import { reducer as formReducer } from 'redux-form'

import reducerAuth from '../services/auth/reducer'
import reducerUser from '../services/profile/reducer'
import reducerEvent from '../services/event/reducer'
import reducerStadistics from '../services/statistics/reducer'
import reducerReservation from '../services/reservation/reducer'

//import reducerMap from '../components/Ancestria/map/services/reducer'


export default combineReducers({
  auth: reducerAuth,
  user: reducerUser,
  event: reducerEvent,
  stadistics: reducerStadistics,
  reservation: reducerReservation,
  form: formReducer,
})