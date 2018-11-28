import React from "react";
import "../../css/main.css";
import PropTypes from "prop-types";
import { AvForm, AvField } from "availity-reactstrap-validation";

const RegisterView = props => {
  return (
    <div className="container ">
      <AvForm className="text-avfield" onSubmit={props.handleSubmit}>
        <h1>Sign Up</h1>
        <p className="text-p">Please fill in this form to create an account.</p>
        <p className="error">{props.error}</p>
        <hr />
        <AvField
          name="username"
          label="Username"
          placeholder="Enter Username"
          type="text"
          onChange={props.handleChange}
          value={props.username}
          errorMessage="This field is required"
          validate={{
            required: { value: true },
            minLength: {
              value: 3,
              errorMessage: "username must have atleast 3 characters"
            }
          }}
        />

        <AvField
          name="email"
          label="Email"
          placeholder="Enter email"
          type="email"
          value={props.email}
          onChange={props.handleChange}
          errorMessage="invalid email"
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
            required: { value: true },
            minLength: {
              value: 3,
              errorMessage:
                "password should have atleast must have atleast 3 characters"
            }
          }}
        />
        <AvField
          type="password"
          placeholder="Confirm Password"
          name="confirmPassword"
          value={props.confirmPassword}
          onChange={props.handleChange}
          label="Confirm Password"
          errorMessage="This field is required"
          validate={{
            required: { value: true },
            match: { value: "password", errorMessage: "passwords do not match" }
          }}
        />
        <button type="submit" >
          Sign Up
        </button>
        <div>
          <p className="text info-text">Already have an account? </p>
          <a href="index.html">login here</a>
        </div>
      </AvForm>
    </div>
  );
};
RegisterView.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  username: PropTypes.string,
  email: PropTypes.string,
  password: PropTypes.string,
  confirmPassword: PropTypes.string,
  error: PropTypes.string
};
export default RegisterView;
