import React, { Component } from "react";
import "./register.scss";
import firebase from "../../../firebase/firebase";
// import { Redirect, Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { RegisterAction } from "../../../store/actions/index";

class Register extends Component {
  state = { email: "", displayName: "", password: "", conformPassword: "" };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onRegisterSubmit = (e) => {
    e.preventDefault();
    // this.props.RegisterAction({
    //   email: this.state.email,
    //   password: this.state.password,
    // });

    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((registerdeUser) => {
        console.log("register success");
        console.log(registerdeUser.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  render() {
    return (
      <div className="register-form-container">
        <form onSubmit={this.onRegisterSubmit} className="login-form">
          <i className="far fa-comments fa-4x" />
          <input
            className="input displayName-input"
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
            onChange={(e) => this.onInputChange(e)}
          />
          <input
            className="input email-input"
            type="text"
            placeholder="Display Name"
            name="displayName"
            value={this.state.displayName}
            onChange={(e) => this.onInputChange(e)}
          />
          <input
            className="input password-input"
            type="password"
            placeholder="Password"
            name="password"
            value={this.state.password}
            onChange={(e) => this.onInputChange(e)}
          />
          <input
            className="input conformPassword-input"
            type="password"
            placeholder="Confirm Password"
            name="conformPassword"
            value={this.state.conformPassword}
            onChange={(e) => this.onInputChange(e)}
          />
          <button className="register-btn">REGISTER</button>
        </form>
      </div>
    );
  }
}

export default Register;

// const mapStateToProps = (state) => {
//   return { currentUser: state.currentUser.currentUser };
// };

// export default connect(mapStateToProps, { RegisterAction })(Register);
