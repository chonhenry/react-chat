import React, { Component } from "react";
import "./right_panel.scss";
import { connect } from "react-redux";
// import {} from "../../../store/actions/index";
import SelectedUserBar from "./selectedUserBar/selectedUserBar";
import MessageInput from "./messageInput/messageInput";

class RightPanel extends Component {
  componentDidMount = () => {};

  render() {
    return (
      <div className="right-panel">
        <SelectedUserBar />
        <MessageInput />
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

export default connect(mapStateToProps, {})(RightPanel);
