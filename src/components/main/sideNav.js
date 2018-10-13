import React, { Component } from 'react';

class SideNav extends Component {
  render() {
    return (
      <div className="sideNav">
        <div>
          <p onClick={this.props.handleCompany}><i className="fas fa-building faIcon"></i>COMPANY</p>
        </div>
        <div>
          <p onClick={this.props.handleJobInfo}><i className="fas fa-info-circle faIcon"></i>JOB INFO</p>
        </div>
        <div>
          <p onClick={this.props.handleTodo}><i className="fas fa-list-ul faIcon"></i>TO-DO</p>
        </div>
        <div>
          <p onClick={this.props.handleNotes}><i className="fas fa-clipboard-list faIcon"></i>NOTES</p>
        </div>
      </div>
    )
  }
}

export default SideNav;
