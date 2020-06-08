import React, { Component } from "react";
import "./messageBoard.scss";
import { connect } from "react-redux";
import firebase from "../../../../firebase/firebase";

class MessageBoard extends Component {
  componentDidUpdate = () => {
    if (this.props.selectedChat.length) {
      //listen to messages change
      firebase
        .firestore()
        .collection("chats")
        .doc(this.props.selectedChat)
        .collection("messages")
        .orderBy("sentAt")
        .onSnapshot((snapshot) => {
          let messages = snapshot.docs.map((chat) => chat.data());
          console.log(messages);
        });
    }
  };

  render() {
    return <div className="message-boarder-container">s</div>;
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
