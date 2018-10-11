import * as UserAPIAdapter from '../../adapter/users_api_adapter';

export const FETCH_USER = 'FETCH_USER';
export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER';

const set_user = (user) => {
  return {
    type: FETCH_USER,
    payload: { user }
  }
}

const set_current_user = (current_user) => {
  return {
    type: FETCH_CURRENT_USER,
    payload: { current_user }
  }
}

export const get_user = (id) => dispatch => {
  return UserAPIAdapter.fetch_user(id).then(
    user => dispatch(set_user(user))
  )
}

export const get_current_user = () => dispatch => {
  return UserAPIAdapter.fetch_current_user().then(
    current_user => dispatch(set_current_user(current_user))
  )
}
