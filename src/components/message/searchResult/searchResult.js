//searchResult
import React from "react";
import firebase from "../../../firebase/firebase";
import { toggleSearchResult } from "../../../store/actions/index";
import { connect } from "react-redux";
import "./searchResult.scss";

class SearchResult extends React.Component {
  componentDidMount = () => {
    // console.log(this.props.currentUser.displayName);
  };

  onClickSendMessage = () => {};

  render() {
    return (
      <div className="search-result-container">
        <div className="search-result">
          <i
            className="fas fa-times fa-2x"
            onClick={this.props.toggleSearchResult}
          />
          <div className="main-title">User Found</div>
          <div className="title">Email</div>
          <div className="info">{this.props.currentUser.displayName}</div>
          <div className="title">Username</div>
          <div className="info">{this.props.currentUser.displayName}</div>
          <div className="confirm-btn" onClick={this.onClickSendMessage}>
            Click to send message
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    showSearchResult: state.showSearchResult,
  };
};

export default connect(mapStateToProps, { toggleSearchResult })(SearchResult);
