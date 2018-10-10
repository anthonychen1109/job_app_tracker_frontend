import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    paddingLeft           : '20px',
    paddingRight          : '20px',
    transform             : 'translate(-50%, -50%)',
  }
};


class SignupForm extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }

  componentDidMount() {
    Modal.setAppElement('body');
  }

  openModal() {
    this.setState({modalIsOpen: true});
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  render() {
    console.log(this.props.hasAccount);
    return (
      <Fragment>
        <span onClick={this.openModal}><p>SIGN UP</p></span>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <form className="signUpModal">
          <div className="modalHeader">
            <div>
              <button className="btn btn-danger modalCloseBtn" onClick={this.closeModal}>X</button>
            </div>
            <div>
              <h1>Register</h1>
            </div>
          </div>
          <div className="form-group modalSignupForm">
            <label htmlFor="username">User Name</label>
            <input type="email" className="form-control" id="username" placeholder="Enter User Name" name="username" onChange={this.props.handleFormInput} value={this.props.username}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.props.handleFormInput} value={this.props.password}/>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input type="password" className="form-control" id="confirmPassword" placeholder="Confirm Password" name="confirmPassword" onChange={this.props.handleFormInput} value={this.props.confirmPassword}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Modal>
      </Fragment>
    );
  }
}

export default SignupForm;