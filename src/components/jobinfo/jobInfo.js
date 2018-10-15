import React, { Component } from 'react';

class JobInfo extends Component {

  state = {
    title: '',
    location: '',
    salary: '',
    postingURL: ''
  }

  render() {
    return (
      <div className="mainDisplay">
        <div className="mainDisplayTop">
          <div>
            <p className="mainDisplayTopHeader">Title</p>
            <p className="mainDisplayTopValue">{this.state.title === '' ?  this.props.title : this.state.title}</p>
          </div>
          <div>
            <p className="mainDisplayTopHeader">Location</p>
            <p className="mainDisplayTopValue">{this.state.location === '' ? this.props.location : this.state.location}</p>
          </div>
          <div>
            <p className="mainDisplayTopHeader">Salary</p>
            <p className="mainDisplayTopValue">{this.state.salary === '' ? `$${this.props.salary}` : `$${this.state.salary}`}</p>
          </div>
          <div>
            <p className="mainDisplayTopHeader">Job Posting URL</p>
            <p className="mainDisplayTopValue">{this.state.postingURL === '' ? this.props.postingURL : this.state.postingURL}</p>
          </div>
        </div>
        <div className="mainDisplayBottom">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Senectus et netus et malesuada fames ac turpis egestas sed. Eu tincidunt tortor aliquam nulla. Nisl tincidunt eget nullam non. Aliquet porttitor lacus luctus accumsan. Iaculis eu non diam phasellus vestibulum lorem sed risus ultricies. Consectetur libero id faucibus nisl tincidunt eget nullam non. Sed turpis tincidunt id aliquet. Sed blandit libero volutpat sed. Nec ullamcorper sit amet risus nullam eget. Commodo quis imperdiet massa tincidunt nunc pulvinar sapien. Vitae nunc sed velit dignissim sodales ut eu sem. Malesuada fames ac turpis egestas integer eget aliquet nibh. Maecenas sed enim ut sem viverra aliquet eget sit amet. Gravida arcu ac tortor dignissim convallis.</p>
        </div>
      </div>
    )
  }
}


JobInfo.defaultProps = {
  title: 'Full Stack Developer',
  location: 'New York City',
  salary: '75000',
  postingURL: 'https://www.example.com'
}

export default JobInfo;
