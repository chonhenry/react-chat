import React, { Component } from "react";
import "./right_panel.scss";
import { connect } from "react-redux";
// import {} from "../../../store/actions/index";
// import firebase from "../../../firebase/firebase";
import SelectedUserBar from "./selectedUserBar/selectedUserBar";
import MessageBoard from "./messageBoard/messageBoard";
import MessageInput from "./messageInput/messageInput";

class RightPanel extends Component {
  state = { listener: null };

  render() {
    return (
      <div className="right-panel">
        {this.props.selectedChat.length ? <SelectedUserBar /> : null}

        {this.props.selectedChat.length ? (
          <MessageBoard chatId={this.props.selectedChat} />
        ) : null}
        {this.props.selectedChat.length ? <MessageInput /> : null}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    selectedChat: state.selectedChat,
    selectedUser: state.selectedUser,
  };
};

export default connect(mapStateToProps)(RightPanel);
