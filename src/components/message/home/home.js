import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import "./home.scss";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { LogoutAction } from "../../store/actions/index";

class Home extends Component {
  componentDidMount = () => {
    console.log("====");
    console.log(this.props.currentUser.displayName);
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
      <div className="home-container">
        <div className="left-panel">
          <div className="user-info">
            <div className="">
              Signin as{" "}
              <span className="display-name">
                {this.props.currentUser.displayName}
              </span>
            </div>
            <button onClick={this.onClickLogout}>logout</button>
          </div>
          <div className="search-box"></div>
          <div className="chat-record"></div>
        </div>
        <div className="right-panel"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
