import React, { Component } from "react";
import "./removeChat.scss";
import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";
import { toggleRemoveChat, selectChat } from "../../../../store/actions/index";

class RemoveChat extends Component {
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

    this.props.toggleRemoveChat();
  };

  render() {
    return (
      <div className="remove-chat-container">
        <div className="remove-chat">
          <div className="question">
            Are you sure you want to delete this chat?
          </div>
          <div className="btn-container">
            <div className="btn delete-btn" onClick={this.onClickDelete}>
              Delete
            </div>
            <div
              className="btn cancel-btn"
              onClick={this.props.toggleRemoveChat}
            >
              Cancel
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    showRemoveChat: state.showRemoveChat,
    selectedChat: state.selectedChat,
  };
};

export default connect(mapStateToProps, { toggleRemoveChat, selectChat })(
  RemoveChat
);
