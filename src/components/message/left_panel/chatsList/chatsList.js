import React, { Component } from "react";
import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";
import ChatBox from "../chatBox/chatBox";
import "./chatsList.scss";

class ChatsList extends Component {
  state = { filteredList: [] };

  componentDidMount = () => {
    this.getChatsList();
  };

  componentWillUnmount = () => {
    this.unsub();
  };

  getChatsList = () => {
    this.unsub = firebase
      .firestore()
      .collection("chats")
      .onSnapshot((snapshot) => {
        this.setState({
          filteredList: snapshot.docs.map((chat) => chat.data()),
        });
      });
  };

  renderChatsList = () => {
    return this.state.filteredList.map((chat) => {
      let currentUserName = this.props.currentUser.displayName;

      if (
        chat.createdBy.name === currentUserName ||
        chat.to.name === currentUserName
      ) {
        if (chat.createdBy.name !== currentUserName) {
          return <ChatBox name={chat.createdBy.name} chatId={chat.chat_id} />;
        } else {
          return <ChatBox name={chat.to.name} chatId={chat.chat_id} />;
        }
      }
    });
  };

  render() {
    return <div className="chat-list">{this.renderChatsList()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps)(ChatsList);
