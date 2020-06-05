import React, { Component } from "react";
import "./login.scss";
import firebase from "../../../firebase/firebase";
import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { LoginAction } from "../../../store/actions/index";

class Login extends Component {
  state = { email: "", password: "", error: "" };

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onSubmitLogin = (e) => {
    e.preventDefault();
    // this.props.LoginAction({
    //   email: this.state.email,
    //   password: this.state.password,
    // });

    firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((signedUser) => {
        console.log("signin success");
        console.log(signedUser.user);
        this.setState({ error: "" });
      })
      .catch((error) => {
        console.log(error.message);
        this.setState({ error: error.message });
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

          {this.state.error.length ? (
            <div className="error-message">{this.state.error}</div>
          ) : null}

          <div className="message">
            Don't have an account? <Link to="/login">Register</Link>
          </div>
        </form>
      </div>
    );
  }
}

export default Login;

// const mapStateToProps = (state) => {
//   return { currentUser: state.currentUser.currentUser };
// };

// export default connect(mapStateToProps, { LoginAction })(Login);

// render() {
//     return (
//       <div className="">
//         <button onClick={this.onClickLogin}>login</button>
//       </div>
//     );
//   }
