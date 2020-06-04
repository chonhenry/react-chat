import React, { Component } from "react";
import firebase from "../../../firebase/firebase";

class Register extends Component {
  onClickLogout = () => {
    firebase.auth().signOut();
  };

  render() {
    return (
      <div className="">
        <button onClick={this.onClickLogout}>logout</button>
      </div>
    );
  }
}

export default Register;
