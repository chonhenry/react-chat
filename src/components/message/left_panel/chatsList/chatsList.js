import React, { Component } from "react";
import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";
import ChatBox from "../chatBox/chatBox";
import "./chatsList.scss";
import { setChatsList } from "../../../../store/actions/index";

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
        let entireList = snapshot.docs.map((chat) => chat.data());

        this.props.setChatsList(
          entireList.filter((chat) => {
            let currentUserName = this.props.currentUser.displayName;
            if (
              chat.createdBy.name === currentUserName ||
              chat.to.name === currentUserName
            ) {
              return chat;
            } else {
              return;
            }
          })
        );
      });
  };

  renderChatsList = () => {
    return this.props.chatsList.map((chat) => {
      let currentUserName = this.props.currentUser.displayName;

      if (chat.createdBy.name !== currentUserName) {
        return <ChatBox name={chat.createdBy.name} key={chat.chat_id} />;
      } else {
        return <ChatBox name={chat.to.name} key={chat.chat_id} />;
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
    chatsList: state.chatsList,
  };
};

export default connect(mapStateToProps, { setChatsList })(ChatsList);
