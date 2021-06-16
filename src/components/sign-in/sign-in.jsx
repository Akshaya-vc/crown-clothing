import { thisStringValue } from "es-abstract";
import React from "react";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input";
import CustomButton from "../button/button";
import { signInWithGoogle } from "../../firebase/firebase.utils";

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = (event) => {
    event.preventDefault();

    this.setState({ email: "", password: "" });
  };
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            value={this.state.email}
            type="email"
            required
            label="email"
            handleChange={this.handleChange}
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <div className="buttons">
            <CustomButton type="submit" value="Submit Form">
              Sign in
            </CustomButton>
            <CustomButton
              onClick={signInWithGoogle}
              type="submit"
              value="Submit Form"
              isGoogleSignIn
            >
              Sign in with Google
            </CustomButton>
          </div>
        </form>
      </div>
    );
  }
}
export default SignIn;