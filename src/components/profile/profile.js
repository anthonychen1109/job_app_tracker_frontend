import React, { Component } from 'react';
import Navbar from '../navbar/navbar';
import { connect } from 'react-redux';
import { get_user, get_current_user } from '../profile/actions';
import MainDisplay from '../main/mainDisplay';
import SideNav from '../main/sideNav';

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
          <div className="profile">
            <div>
              <Navbar hasAccount={this.state.hasAccount}/>
            </div>
            <div className="profileApplications">
              <h1>Your Applications</h1>
            </div>
            <div className="mainApplicationsDisplay">
              <div>
                <SideNav handleJobInfo={this.handleJobInfo} handleCompany={this.handleCompany} handleTodo={this.handleTodo} handleNotes={this.handleNotes}/>
              </div>
              <div>
                {
                  this.state.term === ''
                  ? <MainDisplay term={this.props.term} />
                  : <MainDisplay term={this.state.term}/>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
