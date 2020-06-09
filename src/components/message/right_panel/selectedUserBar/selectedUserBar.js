import React, { Component } from "react";
import "./selectedUserBar.scss";
import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";
import { selectChat } from "../../../../store/actions/index";

class SelectedUserBar extends Component {
  onClickDelete = () => {
    firebase
      .firestore()
      .collection("chats")
      .doc(this.props.selectedChat)
      .delete()
      .then(() => {
        console.log("delete");
      })
      .catch((err) => {
        console.log(err.message);
      });

    this.props.selectChat("");
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

export default connect(mapStateToProps, { selectChat })(SelectedUserBar);
