import React from 'react';

//import './sign-up.styles.scss';
import { SignUpContainer, SignUpTitle } from './sign-up.styles';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import {
  auth,
  createUserProfileDocument,
} from '../../firebase/firebase.utills';

class SignUp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    };
  }

  handleChange = (event) => {
    const { value, name } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = async (event) => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;
    // check for password match
    if (password !== confirmPassword) {
      alert('password not matched');
      return;
    }

    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      this.state({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (err) {
      console.error(err.message);
    }
  };

  render() {
    return (
      <SignUpContainer>
        <SignUpTitle>I dont have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            label="Display Name"
            name="displayName"
            type="text"
            value={this.state.displayName}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Email"
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Password"
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            required
          />
          <FormInput
            label="Confirm Password"
            name="confirmPassword"
            type="password"
            value={this.state.confirmPassword}
            handleChange={this.handleChange}
            required
          />
          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </SignUpContainer>
    );
  }
}

export default SignUp;
