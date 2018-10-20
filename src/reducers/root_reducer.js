import { combineReducers } from 'redux';
import UsersReducer from './users_reducer';
import ApplicationsReducer from './applications_reducer';

const rootReducer = combineReducers({
  user: UsersReducer,
  applications: ApplicationsReducer
})

export default rootReducer;
