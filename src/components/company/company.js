import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_current_user } from '../profile/actions';

const mapStateToProps = (state) => {
  return {
    current_user: state.user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    get_current_user: () => dispatch(get_current_user())
  }
}

class Company extends Component {

  componentDidMount(){
    if (localStorage.getItem("token")) {
      this.getUser()
    }
  }

  getUser = () => {
    this.props.get_current_user()
  }

  render() {
    console.log(this.props.current_user);
    return (
      <div>
        Company
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);
