import React, { Component } from "react";
import LoginView from "../../views/authViews/login";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { loginUser } from "../../actions/authActions/auth";
import { getEntries } from "../../actions/entries/entries";

export class Login extends Component {
  state = {
    email: "",
    password: ""
  };
  componentWillReceiveProps(nextProps) {
    if (nextProps.user.token) {
      localStorage.setItem("token", nextProps.user.token);
      window.location = "/home";
    }
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = () => {
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.loginUser(userData);
  };

  render() {
    const props = {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      email: this.state.email,
      password: this.state.password,
      error: this.props.user.message
    };
    return <LoginView {...props} />;
  }
}

Login.propTypes = {
  user: PropTypes.object
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(
  mapStateToProps,
  { loginUser, getEntries }
)(Login);
