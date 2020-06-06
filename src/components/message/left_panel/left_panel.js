import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import "./left_panel.scss";
import { connect } from "react-redux";
import {
  toggleUserInfo,
  toggleSearchResult,
} from "../../../store/actions/index";
import UserInfo from "../userInfo/userInfo";
import SearchResult from "../searchResult/searchResult";

class LeftPanel extends Component {
  state = { search: "", searchResult: {} };

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

    this.setState({ search: "" });

    firebase
      .firestore()
      .collection("users")
      .where("email", "==", this.state.search)
      .get()
      .then((snapshot) => {
        if (snapshot.docs.length) {
          // console.log(snapshot.docs[0].data());
          this.setState({ searchResult: snapshot.docs[0].data() });
        } else {
          // console.log("No user found");
          this.setState({ searchResult: {} });
        }
      })
      .then(() => {
        this.props.toggleSearchResult();
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
            <button onClick={this.onClickLogout}>logout</button>
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
          <div className="chat-record"></div>
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
  };
};

export default connect(mapStateToProps, { toggleUserInfo, toggleSearchResult })(
  LeftPanel
);
