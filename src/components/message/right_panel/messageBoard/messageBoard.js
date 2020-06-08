import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./messageBoard.scss";
import { connect } from "react-redux";
import firebase from "../../../../firebase/firebase";
import SingleMessage from "../singleMessage/singleMessage";

class MessageBoard extends Component {
  state = { messages: [] };

  componentDidMount = () => {
    if (this.props.selectedChat.length) {
      // listen to messages change
      firebase
        .firestore()
        .collection("chats")
        .doc(this.props.selectedChat)
        .collection("messages")
        .orderBy("sentAt")
        .onSnapshot((snapshot) => {
          let messagesList = snapshot.docs.map((chat) => chat.data());
          this.setState({ messages: messagesList });
          console.log(messagesList);
        });
    }
  };

  componentWillUpdate = () => {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight >= node.scrollHeight;
  };

  componentDidUpdate = () => {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  };

  render() {
    return (
      <div className="message-boarder-container">
        {this.state.messages.map((message) => (
          <SingleMessage
            key={message.messageId}
            message={message.message}
            user={message.from}
          />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    chatsList: state.chatsList,
    selectedChat: state.selectedChat,
  };
};

export default connect(mapStateToProps)(MessageBoard);
