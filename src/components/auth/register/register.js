import React, { Component } from "react";
import "./register.scss";
import firebase from "../../../firebase/firebase";
import { Link } from "react-router-dom";
// import { Redirect, Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { RegisterAction } from "../../../store/actions/index";

class Register extends Component {
  state = {
    email: "",
    displayName: "",
    password: "",
    conformPassword: "",
    error: "",
  };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onRegisterSubmit = (e) => {
    e.preventDefault();
    // this.props.RegisterAction({
    //   email: this.state.email,
    //   password: this.state.password,
    // });

    if (this.formValid()) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((registerdeUser) => {
          console.log("register success");
          console.log(registerdeUser.user);
          this.setState({ error: "" });
        })
        .catch((error) => {
          console.log(error.message);
          this.setState({ error: error.message });
        });
    }
  };

  formValid = () => {
    const { displayName, password, conformPassword } = this.state;
    if (password !== conformPassword) {
      this.setState({ error: "Password not match" });
      return false;
    } else if (!displayName.length) {
      this.setState({ error: "Please enter a display name" });
      return false;
    }

    return true;
  };

  render() {
    return (
      <div className="register-form-container">
        <form onSubmit={this.onRegisterSubmit} className="register-form">
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

          {this.state.error.length ? (
            <div className="error-message">{this.state.error}</div>
          ) : null}

          <p className="message">
            Already a user? <Link to="/login">Login</Link>
          </p>
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
