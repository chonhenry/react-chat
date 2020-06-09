import React, { Component } from "react";
import firebase from "../../../../firebase/firebase";
import { connect } from "react-redux";
import ChatBox from "../chatBox/chatBox";
import "./chatsList.scss";
import { setChatsList, selectChat } from "../../../../store/actions/index";

class ChatsList extends Component {
  // state = { filteredList: [] };

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
      .orderBy("createdAt", "desc")
      .onSnapshot((snapshot) => {
        let entireList = snapshot.docs.map((chat) => chat.data());
        //console.log(entireList);

        this.props.setChatsList(
          entireList.filter((chat) => {
            let currentUserUid = this.props.currentUser.uid;
            if (
              chat.createdBy.uid === currentUserUid ||
              chat.to.uid === currentUserUid
            ) {
              return chat;
            } else {
              return;
            }
          })
        );

        // this.props.selectChat(this.props.chatsList[0].chat_id);
      });
  };

  renderChatsList = () => {
    return this.props.chatsList.map((chat) => {
      let currentUserName = this.props.currentUser.displayName;

      if (chat.createdBy.name !== currentUserName) {
        return (
          <ChatBox
            name={chat.createdBy.name}
            uid={chat.createdBy.uid}
            chatId={chat.chat_id}
            key={chat.chat_id}
          />
        );
      } else {
        return (
          <ChatBox
            name={chat.to.name}
            uid={chat.to.uid}
            chatId={chat.chat_id}
            key={chat.chat_id}
          />
        );
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

export default connect(mapStateToProps, { setChatsList, selectChat })(
  ChatsList
);
