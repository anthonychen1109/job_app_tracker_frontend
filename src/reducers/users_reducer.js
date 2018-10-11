import { FETCH_USER, FETCH_CURRENT_USER } from '../components/profile/actions';

const UsersReducer = (state={}, action) => {
  switch(action.type) {
    case FETCH_USER:
      return {
        ...state,
        user: action.payload.user
      }
    case FETCH_CURRENT_USER:
      return {
        ...state,
        current_user: action.payload.current_user
      }
    default:
      return state
  }
}

export default UsersReducer;
