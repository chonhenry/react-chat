import React, { Component } from "react";
import firebase from "../../../firebase/firebase";
import "./home.scss";
import UserInfo from "../userInfo/userInfo";
import SearchResult from "../searchResult/searchResult";
import LeftPanel from "../left_panel/left_panel";
import RightPanel from "../right_panel/right_panel";
import { connect } from "react-redux";
// import { toogleUserInfo } from "../../../store/actions/index";
// import { Link } from "react-router-dom";

class Home extends Component {
  state = { search: "" };

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
    this.setState({ search: e.target.value });
  };

  onSearchSubmit = (e) => {
    e.preventDefault();
    console.log(`search ${this.state.search}`);
  };

  render() {
    return (
      <div className="home-container">
        {/* {this.props.userInfo ? <UserInfo /> : null} */}
        {/* <UserInfo /> */}

        {/* {this.props.showSearchResult ? <SearchResult /> : null} */}

        <LeftPanel />
        <RightPanel />
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

export default connect(mapStateToProps)(Home);

// render() {
//   return (
//     <div className="home-container">
//       {this.props.userInfo ? <UserInfo /> : null}
//       {/* <UserInfo /> */}

//       <div className="left-panel">
//         <div className="user-info">
//           <div className="signin-as">
//             Signin as{" "}
//             <span
//               className="display-name"
//               onClick={this.props.toogleUserInfo}
//             >
//               {this.props.currentUser.displayName}
//             </span>
//           </div>
//           <button onClick={this.onClickLogout}>logout</button>
//         </div>
//         <div className="search-box">
//           <form onSubmit={this.onSearchSubmit}>
//             <input
//               type="text"
//               placeholder="search"
//               value={this.state.search}
//               onChange={this.onSearchChange}
//             />
//             <button>search</button>
//           </form>
//         </div>
//         <div className="chat-record"></div>
//       </div>

//       <div className="right-panel"></div>
//     </div>
//   );
// }
