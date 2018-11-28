import React, { Component } from "react";
import RegisterView from "../../views/authViews/register";
import { registerUser } from "../../actions/authActions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";

export class Register extends Component {
  state = {
    username: "",
    email: "",
    password: "",
    confirmPassword: ""
  };
  componentWillReceiveProps(nextProps){
    if (nextProps.user.message==="the registration was successful"){
      nextProps.history.push("/");
    }
  }
  handleChange = e => {
    e.preventDefault();
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    const userData = {
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirm_password: this.state.confirmPassword
    };
    this.props.registerUser(userData);
  };
  render() {
    const props = {
      handleSubmit: this.handleSubmit,
      handleChange: this.handleChange,
      username: this.state.username,
      email: this.state.email,
      password: this.state.password,
      confirmPassword: this.state.confirmPassword,
      error:this.props.user.message
    };
    return <RegisterView {...props} />;
  }
}

Register.propTypes = {
  user: PropTypes.object
};
const mapStateToProps = state => ({
  user: state.authReducer.user
});
export default connect(
  mapStateToProps,
  { registerUser }
)(Register);
