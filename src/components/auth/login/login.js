import React, { Component } from "react";
import firebase from "../../../firebase/firebase";

class Login extends Component {
  onClickLogin = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword("henrychon@gmail.com", "123456")
      .then((cred) => {
        console.log(cred.user);
      });
  };

  render() {
    return (
      <div className="">
        <button onClick={this.onClickLogin}>login</button>
      </div>
    );
  }
}

export default Login;
