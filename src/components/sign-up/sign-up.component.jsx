import React, { useState } from 'react';
import { connect } from 'react-redux';

import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { signUpStart } from '../../redux/user/user.action';

const SignUp = ({ signUpStart }) => {
  const [userCredentails, setCredentials] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const handleChange = (event) => {
    const { value, name } = event.target;
    setCredentials({ ...userCredentails, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = userCredentails;
    // check for password match
    if (password !== confirmPassword) {
      alert('password not matched');
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const { displayName, email, password, confirmPassword } = userCredentails;
  return (
    <SignUpContainer>
      <SignUpTitle>I dont have an account</SignUpTitle>
      <span>Sign up with your email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label="Display Name"
          name="displayName"
          type="text"
          value={displayName}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Email"
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Password"
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          required
        />
        <FormInput
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          value={confirmPassword}
          handleChange={handleChange}
          required
        />
        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </SignUpContainer>
  );
};

const mapDispatchToProps = (dispatch) => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials)),
});
export default connect(null, mapDispatchToProps)(SignUp);
