import React, { Component } from 'react';
import { connect } from 'react-redux';
import { get_current_user } from '../profile/actions';
import { Card } from 'semantic-ui-react';
import CompanyCard from './company_card';

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

  static defaultProps = {
    company_name: 'Example Company',
    contact: '1(800)000-000',
    salary: '$75000'
  }

  componentDidMount(){
    if (localStorage.getItem("token")) {
      this.getUser()
    }
  }

  getUser = () => {
    this.props.get_current_user()
  }

  renderCompanies = () => {
    if (this.props.current_user.current_user) {
      if (this.props.current_user.current_user.companies.length === 1) {
        return <CompanyCard company={this.props.current_user.current_user.companies[0]}/>
      } else if(this.props.current_user.current_user.companies.length > 1) {
        return this.props.current_user.current_user.companies.map( (company, index) => {
          return <CompanyCard key={index} company={company}/>
        })
      }
    } else {
      return (
        <div>
          <div>
            <h2>You must be logged in to see your applications.</h2>
            <h2>Example</h2>
          </div>
          <div className="exampleCompany">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">{this.props.company_name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{this.props.contact}</h6>
                <p className="card-text">{this.props.salary}</p>
              </div>
            </div>
          </div>
        </div>
      )
    }
  }

  render() {
    console.log(this.props.current_user.current_user);
    return (
      <div>
        <h1>Companies that you have applied to</h1>
        <div className="displayCompanies">
          {this.renderCompanies()}
        </div>
      </div>
    )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Company);
