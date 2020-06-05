import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import Home from "./components/message/home";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import firebase from "./firebase/firebase";
import { connect } from "react-redux";
import {
  SetCurrentUser,
  LoginAction,
  LogoutAction,
} from "./store/actions/index";

class App extends React.Component {
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.SetCurrentUser(user);
      }
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            exact
            path="/"
            component={this.props.currentUser ? Home : Login}
          />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return { currentUser: state.currentUser.currentUser };
};

export default connect(mapStateToProps, {
  SetCurrentUser,
  LoginAction,
  LogoutAction,
})(App);
