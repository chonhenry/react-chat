import React, { Component } from "react";

class UserInfo extends Component {
  render() {
    return <div></div>;
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
  };
};

export default connect(mapStateToProps)(UserInfo);
