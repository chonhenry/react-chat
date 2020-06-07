import React, { Component } from "react";
import "./chatBox.scss";

class ChatBox extends Component {
  render() {
    const { name, chatId } = this.props;
    return (
      <div className="chat-box" key={chatId}>
        <i className="fas fa-user fa-2x"></i>
        <div className="name">{name}</div>
      </div>
    );
  }
}

export default ChatBox;
