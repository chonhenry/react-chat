import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import "./home.scss";
import { connect } from "react-redux";
// import { Link } from "react-router-dom";
// import { connect } from "react-redux";
// import { LogoutAction } from "../../store/actions/index";

class Home extends Component {
  state = { search: "" };

  componentDidMount = () => {
    // console.log(this.props.currentUser.displayName);
  };

  onClickLogout = () => {
    // this.props.LogoutAction();
    firebase
      .auth()
      .signOut()
      .then(console.log("logout success"))
      .catch((error) => {
        console.log(error.message);
      });
  };

  onSearchChange = (e) => {
    this.setState({ search: e.target.value });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    // this.setState({ search: "" });
    console.log(`search ${this.state.search}`);
  };

  render() {
    return (
      <div className="home-container">
        <div className="left-panel">
          <div className="user-info">
            <div className="signin-as">
              Signin as{" "}
              <span className="display-name">
                {this.props.currentUser.displayName}
              </span>
            </div>
            <button onClick={this.onClickLogout}>logout</button>
          </div>
          <div className="search-box">
            <form onSubmit={this.onSearchSubmit}>
              <input
                type="text"
                placeholder="search"
                value={this.state.search}
                onChange={this.onSearchChange}
              />
              <button>search</button>
            </form>
          </div>
          <div className="chat-record"></div>
        </div>
        <div className="right-panel"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps)(Home);
