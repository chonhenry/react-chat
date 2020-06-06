import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import { toggleUserInfo } from "../../../store/actions/index";
import { connect } from "react-redux";
import "./userInfo.scss";

class UserInfo extends React.Component {
  onClickLogout = () => {
    this.props.toggleUserInfo();

    firebase
      .auth()
      .signOut()
      .then(console.log("logout success"))
      .catch((error) => {
        console.log(error.message);
      });
  };

  render() {
    return (
      <div className="user-info-container">
        <div className="user-info">
          <i
            className="fas fa-times fa-2x"
            onClick={this.props.toggleUserInfo}
          />
          <div className="title">Username</div>
          <div className="info">{this.props.currentUser.displayName}</div>
          <div className="title">Email</div>
          <div className="info">{this.props.currentUser.email}</div>
          <div className="logout-btn" onClick={this.onClickLogout}>
            Logout
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps, { toggleUserInfo })(UserInfo);

//<i class="fas fa-times"></i>
