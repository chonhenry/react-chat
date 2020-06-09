import React, { Component } from "react";
import "./selectedUserBar.scss";
// import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";
import { selectChat, toggleRemoveChat } from "../../../../store/actions/index";

class SelectedUserBar extends Component {
  onClickDelete = () => {
    this.props.toggleRemoveChat();
  };

  render() {
    return (
      <div className="selected-user-bar">
        <div className="talking-to">
          You are talking to{" "}
          <span className="selected-user-name">
            {this.props.selectedUser.name}
          </span>
        </div>

        <i className="fas fa-trash fa-2x" onClick={this.onClickDelete}></i>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedUser: state.selectedUser,
    selectedChat: state.selectedChat,
  };
};

export default connect(mapStateToProps, { selectChat, toggleRemoveChat })(
  SelectedUserBar
);
