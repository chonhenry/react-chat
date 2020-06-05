import React from "react";
// import ReactDOM from "react-dom";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import Home from "./components/message/home";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import firebase from "./firebase/firebase";
import { connect } from "react-redux";
import { SetCurrentUser } from "./store/actions/index";

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
          <Route exact path="/">
            {this.props.currentUser ? (
              <Home />
            ) : this.props.isLoading ? (
              <div>loading</div>
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route path="/register">
            {this.props.currentUser ? <Redirect to="/" /> : <Register />}
          </Route>

          <Route path="/login">
            {this.props.currentUser ? <Redirect to="/" /> : <Login />}
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUser.currentUser,
    isLoading: state.currentUser.isLoading,
  };
};

export default connect(mapStateToProps, {
  SetCurrentUser,
})(App);
