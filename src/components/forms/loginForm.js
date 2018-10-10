import React from 'react';
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


class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false,
      userLoggedIn: true,
      id: '',
      username: '',
      password: '',
      hasToken: ''
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
    this.setState({
      modalIsOpen: false,
      username: '',
      password: ''
    });
  }

  handleFormInput = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  setToken = () => {
  const token = localStorage.getItem("token")
  if (token) {
    this.setState({
      hasToken: true
    })
  }
}

  handleLogin = (e) => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    fetch('http://localhost:8000/token-auth/', {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(newUser)
    })
    .then(res => res.json())
    .then(json => {
      if (json.user) {
      localStorage.setItem('token', json.token);
      this.setToken()
        this.setState({
          userLoggedIn: true,
          id: json.user.id,
          username: json.user.username,
        }, () => this.loggedInUser(this.state));
      } else {
        alert('Invalid Login')
      }
    });
  }

  loggedInUser = (user) => {
    console.log(user);
    this.closeModal()
     // this.props.handleClose()
     // this.props.history.push({
     //   pathname: '/events',
     //   state: {
     //     id: this.state.id,
     //     username: this.state.username
     //   }
     // })
 }

  render() {
    return (
      <div>
        <span onClick={this.openModal}><p>LOG IN</p></span>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
        <form className="signUpModal" onSubmit={this.handleLogin}>
          <div className="modalHeader">
            <div>
              <button className="btn btn-danger modalCloseBtn" onClick={this.closeModal}>X</button>
            </div>
            <div>
              <h1>Login</h1>
            </div>
          </div>
          <div className="form-group modalSignupForm">
            <label htmlFor="username">User Name</label>
            <input type="text" className="form-control" id="username" placeholder="Enter User Name" name="username" onChange={this.handleFormInput} value={this.state.username}/>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" className="form-control" id="password" placeholder="Password" name="password" onChange={this.handleFormInput} value={this.state.password}/>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </Modal>
      </div>
    );
  }
}

export default LoginForm;
