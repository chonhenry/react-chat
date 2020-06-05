import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import { connect } from "react-redux";

class UserInfo extends Component {
  onClickLogout = () => {
    // this.props.LogoutAction();
    firebase
      .auth()
      .signOut()
      .then(console.log("logout success"))
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return <button onClick={this.onClickLogout}>logout</button>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps)(UserInfo);
