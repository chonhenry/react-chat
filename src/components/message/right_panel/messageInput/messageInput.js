import React, { Component } from "react";
import "./messageInput.scss";
import { connect } from "react-redux";
import firebase from "../../../../firebase/firebase";

class MessageInput extends Component {
  state = { message: "" };

  onMessageSubmit = (e) => {
    e.preventDefault();

    if (this.props.selectedChat.length && this.state.message.length) {
      let addMessage = {
        from: {
          name: this.props.currentUser.displayName,
          uid: this.props.currentUser.uid,
          email: this.props.currentUser.email,
        },
        sentAt: new Date(),
        message: this.state.message,
      };

      firebase
        .firestore()
        .collection("chats")
        .doc(this.props.selectedChat)
        .collection("messages")
        .add(addMessage);
    }
  };

  onMessageChange = (e) => {
    this.setState({ message: e.target.value });
  };

  render() {
    return (
      <div className="message-input">
        <form onSubmit={this.onMessageSubmit}>
          <input
            onChange={this.onMessageChange}
            type="text"
            placeholder="Type your message"
          />
        </form>
        <i className="fas fa-pen fa-2x"></i>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    selectedChat: state.selectedChat,
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps, {})(MessageInput);
