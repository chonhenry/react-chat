import React, { Component } from "react";
import firebase from "../../firebase/firebase";
import { Redirect, Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutAction } from "../../store/actions/index";

class Home extends Component {
  onClickLogout = () => {
    this.props.LogoutAction();
  };

  render() {
    return (
      <div className="">
        <button onClick={this.onClickLogout}>logout</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser.currentUser };
};

export default connect(mapStateToProps, { LogoutAction })(Home);
