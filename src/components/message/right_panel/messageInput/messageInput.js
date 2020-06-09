import React, { Component } from "react";
import "./messageInput.scss";
import { connect } from "react-redux";
import firebase from "../../../../firebase/firebase";
import { database } from "firebase";

class MessageInput extends Component {
  state = {
    message: "",
  };

  onMessageSubmit = (e) => {
    e.preventDefault();

    if (this.props.selectedChat.length && this.state.message.length) {
      // message to be added
      let addMessage = {
        from: {
          name: this.props.currentUser.displayName,
          uid: this.props.currentUser.uid,
          email: this.props.currentUser.email,
        },
        sentAt: new Date(),
        message: this.state.message,
      };

      // update last message time
      firebase
        .firestore()
        .collection("chats")
        .doc(this.props.selectedChat)
        .update({
          lastUpdatedTime: new Date(),
        });

      // save message to firestore
      firebase
        .firestore()
        .collection("chats")
        .doc(this.props.selectedChat)
        .collection("messages")
        .add(addMessage)
        .then((res) => {
          firebase
            .firestore()
            .collection("chats")
            .doc(this.props.selectedChat)
            .collection("messages")
            .doc(res.id)
            .update({ messageId: res.id });
        });

      this.setState({ message: "" });
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
            value={this.state.message}
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
