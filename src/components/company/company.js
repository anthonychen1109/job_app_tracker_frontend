import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetch_applications } from './actions';
import { get_current_user } from '../profile/actions';

const mapStateToProps = (state) => {
  return {
    applications: state.applications,
    current_user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_current_user: () => dispatch(get_current_user()),
    fetch_applications: () => dispatch(fetch_applications())
  }
}

class Company extends Component {

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.getUser()
    }
  }

  getUser = () => {
    this.props.get_current_user()
  }

  render() {
    return (
      <div>
        hi
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);
