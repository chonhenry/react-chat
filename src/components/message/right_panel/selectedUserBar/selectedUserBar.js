import React, { Component } from "react";
import "./selectedUserBar.scss";
import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";

class SelectedUserBar extends Component {
  getSelectedUserName = () => {};

  render() {
    return (
      <div className="selected-user-bar">
        <div className="talking-to">
          You are talking to{" "}
          <span className="selected-user-name">
            {this.props.selectedUser.name}
          </span>
        </div>
        <i className="fas fa-trash fa-2x"></i>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps)(SelectedUserBar);
