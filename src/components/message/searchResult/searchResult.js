//searchResult
import React from "react";
import firebase from "../../../firebase/firebase";
import { toggleSearchResult } from "../../../store/actions/index";
import { connect } from "react-redux";
import "./searchResult.scss";

class SearchResult extends React.Component {
  componentDidMount = () => {
    // console.log(this.props.currentUser.displayName);
    // if (this.props.result.name) {
    //   console.log(this.props.result.uid);
    //   console.log(this.props.currentUser.uid);
    // } else {
    //   console.log("no result found");
    // }
  };

  onClickSendMessage = () => {};

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
            <div className="confirm-btn" onClick={this.onClickSendMessage}>
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

export default connect(mapStateToProps, { toggleSearchResult })(SearchResult);
