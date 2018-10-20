import * as AppAPIAdapter from '../../adapter/applications_api_adapter';

export const FETCH_APPLICATIONS = "FETCH_APPLICATIONS"

const set_applications = (application) => {
  return {
    type: FETCH_APPLICATIONS,
    payload: { application }
  }
}

export const fetch_applications = () => dispatch => {
  return AppAPIAdapter.fetch_applications().then( application => dispatch(set_applications(application)))
}
