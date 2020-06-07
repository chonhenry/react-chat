import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import { connect } from "react-redux";

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
        console.log(chat.chat_id);
        if (chat.createdBy.name !== currentUserName) {
          return (
            <div className="chat-box" key={chat.chat_id}>
              {chat.createdBy.name}
            </div>
          );
        } else {
          return (
            <div className="chat-box" key={chat.chat_id}>
              {chat.to.name}
            </div>
          );
        }
      }
    });
  };

  render() {
    return (
      <div
        className="chat-list"
        onClick={() => console.log(this.props.userChatsList)}
      >
        {this.renderChatsList()}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userChatsList: state.userChats.userChats,
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps)(ChatsList);
