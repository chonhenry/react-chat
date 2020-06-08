import React, { Component } from "react";
import "./singleMessage.scss";
import { connect } from "react-redux";

class SingleMessage extends Component {
  isOwnMessage = (uid) => {
    return this.props.currentUser.uid === uid;
  };

  render() {
    const { email, name, uid } = this.props.user;
    return (
      <div
        className={`message ${
          this.isOwnMessage(this.props.user.uid) ? "own" : "not-own"
        }`}
      >
        <div className="from-name">{name}</div>
        <div className="message-text">{this.props.message}</div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    // chatsList: state.chatsList,
    // selectedChat: state.selectedChat,
  };
};

export default connect(mapStateToProps, {})(SingleMessage);
