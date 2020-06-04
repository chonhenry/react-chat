import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import Home from "./components/message/home";
import "./App.css";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import firebase from "./firebase/firebase";

class App extends React.Component {
  state = {
    user_exist: null,
  };

  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user_exist: true });
      } else {
        this.setState({ user_exist: false });
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
            component={this.state.user_exist ? Home : Login}
          />
          <Route path="/register" component={Register} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
