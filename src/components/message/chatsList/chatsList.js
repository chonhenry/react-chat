import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import { connect } from "react-redux";

class ChatsList extends Component {
  state = { a: [1, 2, 3, 4] };

  componentDidMount = () => {
    // console.log(this.props.userChatsList);
  };

  renderChatsList = () => {
    return this.props.userChatsList.map((chat) => {
      if (chat.createdBy.name !== this.props.currentUser.displayName) {
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
