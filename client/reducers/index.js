import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './auth_reducer';
import publicReducer from './public_reducer';
import reservationReducer from './reservation_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
  public: publicReducer,
  auth: authReducer,
  user: userReducer,
  reservation: reservationReducer,
  form: formReducer
});

export default rootReducer;
