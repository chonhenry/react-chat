//searchResult
import React from "react";
import firebase from "../../../firebase/firebase";
import { toggleSearchResult, selectUser } from "../../../store/actions/index";
import { connect } from "react-redux";
import "./searchResult.scss";

class SearchResult extends React.Component {
  componentDidMount = () => {
    // if (this.props.result.name) {
    //   console.log(this.props.result);
    // } else {
    //   console.log("no result found");
    // }
  };

  onClickCreateChat = () => {
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
      });

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
  };
};

export default connect(mapStateToProps, { toggleSearchResult, selectUser })(
  SearchResult
);
