import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import "./left_panel.scss";
import { connect } from "react-redux";
import {
  toggleUserInfo,
  toggleSearchResult,
  selectChat,
  setUserChats,
} from "../../../store/actions/index";
import UserInfo from "../userInfo/userInfo";
import SearchResult from "../searchResult/searchResult";
import ChatsList from "../chatsList/chatsList";

class LeftPanel extends Component {
  state = { search: "", searchResult: {}, chatsList: [] };

  componentDidMount = () => {
    this.filterChatsList();
  };

  onClickLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(console.log("logout success"))
      .catch((error) => {
        console.log(error.message);
      });
  };

  onSearchChange = (e) => {
    let searchTerm = e.target.value;
    this.setState({ search: searchTerm });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();

    firebase
      .firestore()
      .collection("users")
      .where("email", "==", this.state.search)
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length) {
          this.setState({ searchResult: snapshot.docs[0].data() });
        } else {
          this.setState({ searchResult: {} });
        }
      })
      .then(() => {
        this.props.toggleSearchResult();
      });
  };

  filterChatsList = () => {
    firebase
      .firestore()
      .collection("chats")
      .get()
      .then((snapshot) => {
        let filteredChatsList = [];
        filteredChatsList = snapshot.docs.filter(
          (doc) =>
            this.props.currentUser.displayName === doc.data().createdBy.name ||
            this.props.currentUser.displayName === doc.data().to.name
        );

        filteredChatsList = filteredChatsList.map((doc) => doc.data());

        this.props.setUserChats(filteredChatsList);
      });
  };

  render() {
    return (
      <div className="home-container">
        {this.props.userInfo ? <UserInfo /> : null}
        {this.props.showSearchResult ? (
          <SearchResult
            result={this.state.searchResult ? this.state.searchResult : null}
          />
        ) : null}

        <div className="left-panel">
          <div className="user-info">
            <div className="signin-as">
              Signin as{" "}
              <span
                className="display-name"
                onClick={this.props.toggleUserInfo}
              >
                {this.props.currentUser.displayName}
              </span>
            </div>
            {/* <button onClick={this.onClickLogout}>logout</button> */}
          </div>
          <div className="search-box">
            <form onSubmit={this.onSearchSubmit}>
              <input
                type="text"
                placeholder="Search by email"
                value={this.state.search}
                onChange={this.onSearchChange}
              />
              <button>Search</button>
            </form>
          </div>
          <ChatsList />
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    userInfo: state.userInfo,
    showSearchResult: state.showSearchResult,
    // selectedChat: state.selectedChat.selectedChat,
  };
};

export default connect(mapStateToProps, {
  toggleUserInfo,
  toggleSearchResult,
  selectChat,
  setUserChats,
})(LeftPanel);
