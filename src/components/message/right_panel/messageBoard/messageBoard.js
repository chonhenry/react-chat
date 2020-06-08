import React, { Component } from "react";
import "./messageBoard.scss";
import { connect } from "react-redux";
import firebase from "../../../../firebase/firebase";
import SingleMessage from "../singleMessage/singleMessage";

class MessageBoard extends Component {
  // state = {
  //   message: [
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message:
  //         "i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "i am sofia",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message: "how are you?",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "i am good",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "nice to meet you",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message: "nice to meet you too",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message:
  //         "i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "i am sofia",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message: "how are you?",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "i am good",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "nice to meet you",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message: "nice to meet you too",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message:
  //         "i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "i am sofia",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message: "how are you?",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "i am good",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "nice to meet you",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message: "nice to meet you too",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message:
  //         "i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily i am lily",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "i am sofia",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message: "how are you?",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "i am good",
  //     },
  //     {
  //       from: {
  //         email: "sofia@gmail.com",
  //         name: "sofia",
  //         uid: "cCsdnvZ4PhaQX6ZTArtSCQsHpHn1",
  //       },
  //       message: "nice to meet you",
  //     },
  //     {
  //       from: {
  //         email: "lily@gmail.com",
  //         name: "lily",
  //         uid: "2fSqEP6Wxod9ezoEaCilrGb0Gsz1",
  //       },
  //       message: "nice to meet you too",
  //     },
  //   ],
  // };

  state = { messages: [] };

  componentDidMount = () => {
    if (this.props.selectedChat.length) {
      // listen to messages change
      firebase
        .firestore()
        .collection("chats")
        .doc(this.props.selectedChat)
        .collection("messages")
        .orderBy("sentAt")
        .onSnapshot((snapshot) => {
          let messagesList = snapshot.docs.map((chat) => chat.data());
          this.setState({ messages: messagesList });
          console.log(messagesList);
        });
    }
  };

  render() {
    return (
      <div
        className="message-boarder-container"
        onScroll={() => console.log("scroll")}
      >
        {this.state.messages.map((message) => (
          <SingleMessage message={message.message} user={message.from} />
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    chatsList: state.chatsList,
    selectedChat: state.selectedChat,
  };
};

export default connect(mapStateToProps)(MessageBoard);
