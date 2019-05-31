import React, { Component } from 'react';
import { connect } from 'react-redux';
import './LoginPage.css';
import { login } from "./LoginAction"

class AuthPage extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      error: '',
    };

    this.handlePassChange = this.handlePassChange.bind(this);
    this.handleUserChange = this.handleUserChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.dismissError = this.dismissError.bind(this);
  }

  dismissError() {
    this.setState({ error: '' });
  }

  handleSubmit(evt) {
    evt.preventDefault();

    if (!this.state.username) {
      return this.setState({ error: 'Username is required' });
    }

    if (!this.state.password) {
      return this.setState({ error: 'Password is required' });
    }
    const data = {userName:this.state.username,password:this.state.password}
    const { authCall } = this.props;
    authCall(data);
    return this.setState({ error: '' });
  }

  handleUserChange(evt) {
    this.dismissError();
    this.setState({
      username: evt.target.value,
    });
  };

  handlePassChange(evt) {
    this.dismissError();
    this.setState({
      password: evt.target.value,
    });
  }

  render() {
    // NOTE: I use data-attributes for easier E2E testing
    // but you don't need to target those (any css-selector will work)

    return (
      <div className="LoginBack">
        <div className="Login">
        <h3>CCN CoffeeShop</h3>
          <form onSubmit={this.handleSubmit}>
            
            <label>User Name</label>
            <input type="text" data-test="username" value={this.state.username} onChange={this.handleUserChange} />

            <label>Password</label>
            <input type="password" data-test="password" value={this.state.password} onChange={this.handlePassChange} />

            <input type="submit" value="Log In" className="btn submit" />
          </form>
          {
              this.state.error &&
              <p className="error" onClick={this.dismissError}>
                {this.state.error}
              </p>
            }
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

};

const mapDispatchToProps = dispatch => ({
  authCall: (data) => dispatch(login(data)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
  )(AuthPage);
