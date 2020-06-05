import React, { Component } from "react";
import firebase from "../../firebase/firebase";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { LogoutAction } from "../../store/actions/index";

class Home extends Component {
  componentDidMount = () => {
    console.log(this.props.isLoading);
  };

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
  return {
    currentUser: state.currentUser.currentUser,
    isLoading: state.currentUser.isLoading,
  };
};

export default connect(mapStateToProps, { LogoutAction })(Home);
