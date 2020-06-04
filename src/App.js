import React from "react";
import ReactDOM from "react-dom";
import Login from "./components/auth/login/login";
import Register from "./components/auth/register/register";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import firebase from "./firebase/firebase";

class App extends React.Component {
  state = {
    user_exist: null,
  };
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user_exist: true });
      } else {
        this.setState({ user_exist: false });
      }
    });
  };

  render() {
    // let user_exist = null;
    // firebase.auth().onAuthStateChanged((user) => {
    //   user_exist = user;
    // });

    return (
      <Router>
        <Switch>
          <Route
            exact
            path="/"
            component={this.state.user_exist ? Register : Login}
          />
        </Switch>
      </Router>
    );
  }
}

export default App;
