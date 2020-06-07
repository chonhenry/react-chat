//searchResult
import React from "react";
import firebase from "../../../../firebase/firebase";
import {
  toggleSearchResult,
  selectUser,
  selectChat,
} from "../../../../store/actions/index";
import { connect } from "react-redux";
import "./searchResult.scss";

class SearchResult extends React.Component {
  alreadyExist = (name) => {
    let exist = false;
    this.props.chatsList.some((chat) => {
      if (chat.createdBy.name === name || chat.to.name === name) {
        exist = true;
        return exist;
      }
      return exist;
    });
    return exist;
  };

  onClickCreateChat = () => {
    if (!this.alreadyExist(this.props.result.name)) {
      var addData = {
        createdAt: new Date(),
        createdBy: {
          uid: this.props.currentUser.uid,
          name: this.props.currentUser.displayName,
          email: this.props.currentUser.email,
        },
        to: {
          uid: this.props.result.uid,
          name: this.props.result.name,
          email: this.props.result.email,
        },
      };

      firebase
        .firestore()
        .collection("chats")
        .add(addData)
        .then((res) => {
          firebase.firestore().collection("chats").doc(res.id).update({
            chat_id: res.id,
          });

          this.props.selectChat(res.id);
        });
    } else {
      this.props.chatsList.some((chat) => {
        if (
          chat.createdBy.uid === this.props.result.uid ||
          chat.to.uid === this.props.result.uid
        ) {
          this.props.selectChat(chat.chat_id);
          return true;
        }
        return false;
      });
    }

    this.props.selectUser(this.props.result.uid);
    this.props.toggleSearchResult();
  };

  renderResult = () => {
    if (this.props.result.name) {
      return (
        <div className="search-result">
          <i
            className="fas fa-times fa-2x"
            onClick={this.props.toggleSearchResult}
          />
          <div className="main-title">User Found</div>
          <div className="title">Email</div>
          <div className="info">{this.props.result.email}</div>
          <div className="title">Username</div>
          <div className="info">{this.props.result.name}</div>
          {this.props.result.uid === this.props.currentUser.uid ? null : (
            <div className="confirm-btn" onClick={this.onClickCreateChat}>
              Click to send message
            </div>
          )}
        </div>
      );
    } else {
      return (
        <div className="search-result">
          <i
            className="fas fa-times fa-2x"
            onClick={this.props.toggleSearchResult}
          />
          <div className="title">No User Found</div>
        </div>
      );
    }
  };

  render() {
    return <div className="search-result-container">{this.renderResult()}</div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    showSearchResult: state.showSearchResult,
    chatsList: state.chatsList,
    selectedChat: state.selectedChat,
  };
};

export default connect(mapStateToProps, {
  toggleSearchResult,
  selectUser,
  selectChat,
})(SearchResult);
