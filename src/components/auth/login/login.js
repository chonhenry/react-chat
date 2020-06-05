import React, { Component } from "react";
import "./login.scss";
// import firebase from "../../../firebase/firebase";
import { connect } from "react-redux";
import { LoginAction } from "../../../store/actions/index";

class Login extends Component {
  state = { email: "", password: "" };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitLogin = (e) => {
    e.preventDefault();
    this.props.LoginAction({
      email: this.state.email,
      password: this.state.password,
    });
  };

  render() {
    return (
      <div className="login-form-container">
        <form onSubmit={this.onSubmitLogin} className="login-form">
          <i className="far fa-comments fa-4x" />
          <input
            className="input email-input"
            type="email"
            placeholder="Email"
            name="email"
            value={this.state.email}
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
          <button className="login-btn">LOGIN</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser.currentUser };
};

export default connect(mapStateToProps, { LoginAction })(Login);

// render() {
//     return (
//       <div className="">
//         <button onClick={this.onClickLogin}>login</button>
//       </div>
//     );
//   }
