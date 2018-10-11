import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import { connect } from 'react-redux';
import { get_user, get_current_user } from '../profile/actions';

const mapStateToProps = (state) => ({
  user: state.user
})

const mapDispatchToProps = (dispatch) => ({
  get_user: (id) => dispatch(get_user(id)),
  get_current_user: () => dispatch(get_current_user())
})

class Profile extends Component {

  state = {
    id: '',
    username: '',
    hasAccount: ''
  }

  componentDidMount() {
    if (localStorage.getItem("token")) {
      this.getUser()
    }
  }

  getUser = () => {
    this.props.get_current_user()
    .then( r => {
      this.setState({
        id: r.payload.current_user.id,
        username: r.payload.current_user.username,
        hasAccount: true
      })
    })
  }

  render() {
    return (
      <div className="application">
        <div className="overlay">
          <Navbar hasAccount={this.state.hasAccount}/>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
