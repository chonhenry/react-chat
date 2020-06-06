import React, { Component } from "react";
// import UserInfo from "../userInfo/userInfo";
import firebase from "../../../firebase/firebase";
import { toogleUserInfo } from "../../../store/actions/index";
import { connect } from "react-redux";
import "./userInfo.scss";

class UserInfo extends React.Component {
  componentDidMount = () => {
    // console.log(this.props.currentUser.displayName);
  };

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
    return (
      <div className="user-info-container">
        <div className="user-info">
          <i
            className="fas fa-times fa-2x"
            onClick={this.props.toogleUserInfo}
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

export default connect(mapStateToProps, { toogleUserInfo })(UserInfo);

//<i class="fas fa-times"></i>
