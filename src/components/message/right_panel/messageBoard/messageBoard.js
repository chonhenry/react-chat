import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./messageBoard.scss";
import { connect } from "react-redux";
import firebase from "../../../../firebase/firebase";
import SingleMessage from "../singleMessage/singleMessage";
import { setMessagesList } from "../../.././../store/actions/index";

class MessageBoard extends Component {
  state = { chatId: this.props.selectedChat, messages: [] };

  componentDidMount = () => {
    // this.getMessagesList();
  };

  getMessagesList = async (selectedChat) => {
    let messagesList;

    // this.unsub = firebase
    //   .firestore()
    //   .collection("chats")
    //   .doc(selectedChat)
    //   .collection("messages")
    //   .orderBy("sentAt")
    //   .onSnapshot((snapshot) => {
    //     messagesList = snapshot.docs.map((chat) => chat.data());
    //     //console.log(messagesList);
    //     //this.props.setMessagesList(messagesList);
    //   });

    await firebase
      .firestore()
      .collection("chats")
      .doc(selectedChat)
      .collection("messages")
      .orderBy("sentAt")
      .get()
      .then((snapshot) => {
        messagesList = snapshot.docs.map((chat) => chat.data());
        //console.log(messagesList);
        //this.props.setMessagesList(messagesList);
      });

    return messagesList;
  };

  renderMessagesList = async () => {
    let renderList = [];
    // this.getMessagesList(this.props.selectedChat).then((res) => {
    //   // (res) => (renderList = res)
    //   console.log("res: ", res);
    // });

    return renderList.map((message) => (
      <SingleMessage message={message.message} user={message.from} />
    ));
  };

  componentWillUpdate = () => {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight >= node.scrollHeight;
    // console.log("will update");
  };

  componentDidUpdate = () => {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
    //console.log("did update");
    //this.unsub();
  };

  componentWillUnmount = () => {
    this.unsub();
  };

  render() {
    return (
      <div className="message-boarder-container">
        2{/* {this.renderMessagesList()} */}
        {/* {this.getMessagesList(this.props.selectedChat)} */}
        {/* {this.state.messages.map((message) => (
          <SingleMessage
            key={message.messageId}
            message={message.message}
            user={message.from}
          />
        ))} */}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    chatsList: state.chatsList,
    messagesList: state.messagesList,
    selectedChat: state.selectedChat,
  };
};

export default connect(mapStateToProps, { setMessagesList })(MessageBoard);
