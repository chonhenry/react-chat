import React, { Component } from "react";
import "./right_panel.scss";
import { connect } from "react-redux";
// import {} from "../../../store/actions/index";
import firebase from "../../../firebase/firebase";
import SelectedUserBar from "./selectedUserBar/selectedUserBar";
import MessageBoard from "./messageBoard/messageBoard";
import MessageInput from "./messageInput/messageInput";

class RightPanel extends Component {
  state = { listener: null };

  // componentDidMount = () => {
  //   firebase.firestore().collection()
  // };

  // componentDidUpdate = () => {
  //   console.log("right panel did update");
  //   this.setState({
  //     listener: firebase
  //       .firestore()
  //       .collection("chats")
  //       .doc(this.props.selectedChat)
  //       .collection("messages")
  //       .orderBy("sentAt")
  //       .onSnapshot((snapshot) => {
  //         let messagesList = snapshot.docs.map((chat) => chat.data());
  //         this.setState({ messages: messagesList });
  //         // console.log(messagesList);
  //       }),
  //   });
  // };

  render() {
    return (
      <div className="right-panel">
        <SelectedUserBar />
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

export default connect(mapStateToProps, {})(RightPanel);
