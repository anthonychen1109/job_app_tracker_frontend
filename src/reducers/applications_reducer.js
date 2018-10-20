import { FETCH_APPLICATIONS } from '../components/company/actions';

const ApplicationsReducer = (state={application:{}}, action) => {
  switch(action.type) {
    case FETCH_APPLICATIONS:
      return {
        ...state,
        application: action.payload.application
      }
    default:
      return state
  }
}

export default ApplicationsReducer
