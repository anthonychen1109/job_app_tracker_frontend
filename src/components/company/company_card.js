import React, { Component } from 'react';

class CompanyCard extends Component {
  render() {
    return (
      <div className="companyDiv">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">{this.props.company.company_name}</h5>
            <h6 className="card-subtitle mb-2 text-muted">{this.props.company.contact}</h6>
            <p className="card-text">{this.props.company.salary}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CompanyCard;
