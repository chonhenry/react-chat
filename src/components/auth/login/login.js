import React, { Component } from "react";
import firebase from "../../../firebase/firebase";

class Login extends Component {
  onClickLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("henrychon@gmail.com", "123456")
      .then((cred) => {
        // console.log(cred.user);
      });
  };

  render() {
    return (
      <div className="login-form">
        <i className="far fa-comments"></i>
        <form>
          <input className="" placeholder="Email" />
          <input className="" placeholder="Password" />
          <button className="login-btn">Login</button>
        </form>
      </div>
    );
  }
}

export default Login;

// render() {
//     return (
//       <div className="">
//         <button onClick={this.onClickLogin}>login</button>
//       </div>
//     );
//   }
