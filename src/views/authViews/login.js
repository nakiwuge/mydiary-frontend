import React from "react";
import "../../css/main.css";
import PropTypes from "prop-types";
import { AvForm, AvField } from "availity-reactstrap-validation";
import ReactLoading from "react-loading";

const LoginView = props => {
  const message = () => {
    if (
      (props.error === "the registration was successful") |
      (props.error === "you have been logged in")
    ) {
      return <p className="success">{props.error}</p>;
    } else {
      return <p className="error">{props.error}</p>;
    }
  };
  return (
    <div className="container ">
      <AvForm className="text-avfield" onSubmit={props.handleSubmit}>
        <h1 id="welcome_text">Welcome to My Diary</h1>
        <h3 className="info-text">Please login with your account details</h3>
        {message()}
        <hr />

        <AvField
          name="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          value={props.email}
          onChange={props.handleChange}
          validate={{
            required: { value: true }
          }}
        />
        <AvField
          type="password"
          label="Password"
          placeholder="Enter Password"
          name="password"
          value={props.password}
          onChange={props.handleChange}
          errorMessage="This field is required"
          validate={{
            required: { value: true }
          }}
        />
        <button type="submit">Login</button>
        <div>
          <p className="text info-text">New user? </p>
          <a href="/register" className="info-text" id="signup-bg">
            <strong>SignUp here</strong>{" "}
          </a>
        </div>
      </AvForm>
      <ReactLoading className="loader" type="spin" hidden={props.hidden} />
    </div>
  );
};
LoginView.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  email: PropTypes.string,
  password: PropTypes.string,
  error: PropTypes.string,
  hidden: PropTypes.bool
};
export default LoginView;
