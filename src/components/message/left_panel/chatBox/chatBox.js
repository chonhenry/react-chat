import React, { Component } from "react";
import "./chatBox.scss";
import { connect } from "react-redux";
import { selectChat, selectUser } from "../../../../store/actions/index";
//import firebase from "../../../../firebase/firebase";

class ChatBox extends Component {
  onClickChatBox = () => {
    this.props.selectChat(this.props.chatId);
    this.props.selectUser(this.props.uid);
  };

  render() {
    const { name, chatId } = this.props;

    return (
      <div
        className={`chat-box ${
          chatId === this.props.selectedChat ? "clicked" : ""
        }`}
        onClick={this.onClickChatBox}
      >
        <i className="fas fa-user fa-2x"></i>
        <div className="name">{name}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    selectedChat: state.selectedChat,
  };
};

export default connect(mapStateToProps, { selectChat, selectUser })(ChatBox);
