import React, { Component } from 'react';
import JobInfo from '../jobinfo/jobInfo';
import Company from '../company/company';
import Todo from '../todo/todo';
import Notes from '../notes/notes';

class MainDisplay extends Component {

  state = {
    title: '',
    location: '',
    salary: '',
    postingURL: ''
  }

  renderComponent = () => {
    switch(this.props.term) {
      case 'jobInfo':
        return <JobInfo />
      case 'company':
        return <Company />
      case 'todo':
        return <Todo />
      case 'notes':
        return <Notes />
      default:
        return <Company />
    }
  }

  render() {
    return (
      <div>
        {this.renderComponent()}
      </div>
    )
  }
}

export default MainDisplay;
