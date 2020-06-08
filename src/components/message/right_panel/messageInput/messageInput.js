import React, { Component } from "react";
import "./messageInput.scss";

class MessageInput extends Component {
  render() {
    return (
      <div className="message-input">
        <form>
          <input type="text" placeholder="Type your message" />
        </form>
        <i className="fas fa-pen fa-2x"></i>
      </div>
    );
  }
}
export default MessageInput;
