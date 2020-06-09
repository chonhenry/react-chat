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
    this.getMessagesList();
  };

  getMessagesList = () => {
    let messagesList = [];

    this.unsub = firebase
      .firestore()
      .collection("chats")
      .onSnapshot((snapshot) => {
        // console.log(snapshot.docChanges()[0].doc.id);

        if (snapshot.docChanges().length) {
          //console.log("something changed");
          firebase
            .firestore()
            .collection("chats")
            .doc(this.props.selectedChat)
            .collection("messages")
            .orderBy("sentAt")
            .get()
            .then((snapshot) => {
              messagesList = snapshot.docs.map((chat) => chat.data());
              this.setState({ messages: messagesList });
              //console.log(messagesList);
            });
        }
      });

    return messagesList;
  };

  renderMessagesList = () => {
    return this.state.messages.map((message) => {
      return (
        <SingleMessage
          key={message.messageId}
          message={message.message}
          user={message.from}
        />
      );
    });
  };

  componentWillUpdate = () => {
    const node = ReactDOM.findDOMNode(this);
    this.shouldScrollToBottom =
      node.scrollTop + node.clientHeight >= node.scrollHeight;
  };

  componentDidUpdate = () => {
    if (this.shouldScrollToBottom) {
      const node = ReactDOM.findDOMNode(this);
      node.scrollTop = node.scrollHeight;
    }
  };

  componentWillUnmount = () => {
    this.unsub();
  };

  render() {
    return (
      <div
        className="message-boarder-container"
        // onClick={this.renderMessagesList}
      >
        {this.renderMessagesList()}
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

//let renderList = [];
// firebase
//   .firestore()
//   .collection("chats")
//   .doc("T7V1tukkMtYnwZNXLaVo")
//   .collection("messages")
//   .orderBy("sentAt")
//   .get()
//   .then((snapshot) => {
//     let messagesList = snapshot.docs.map((chat) => chat.data());
//     // this.setState({ messages: messagesList });
//     console.log(messagesList);
//     renderList = messagesList;
//   });
//console.log(renderList);
// this.unsub = firebase
//   .firestore()
//   .collection("chats")
//   .doc(this.props.selectedChat)
//   .collection("messages")
//   .orderBy("sentAt")
//   .onSnapshot((snapshot) => {
//     renderList = snapshot.docs.map((chat) => chat.data());
//     console.log(renderList);
//     this.setState({ messages: renderList });
//   });
// return renderList.map((message) => (
//   <SingleMessage message={message.message} user={message.from} />
// ));

{
  /* {this.getMessagesList(this.props.selectedChat)} */
}
{
  /* {this.state.messages.map((message) => (
          <SingleMessage
            key={message.messageId}
            message={message.message}
            user={message.from}
          />
        ))} */
}
