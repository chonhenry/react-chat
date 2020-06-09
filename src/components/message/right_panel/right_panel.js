import React, { Component } from "react";
import "./right_panel.scss";
import { connect } from "react-redux";
import { toggleRemoveChat } from "../../../store/actions/index";
// import firebase from "../../../firebase/firebase";
import SelectedUserBar from "./selectedUserBar/selectedUserBar";
import MessageBoard from "./messageBoard/messageBoard";
import MessageInput from "./messageInput/messageInput";
import RemoveChat from "./removeChat/removeChat";

class RightPanel extends Component {
  state = { listener: null };

  render() {
    return (
      <div className="right-panel">
        {this.props.showRemoveChat ? <RemoveChat /> : null}

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
    showRemoveChat: state.showRemoveChat,
  };
};

export default connect(mapStateToProps, { toggleRemoveChat })(RightPanel);
