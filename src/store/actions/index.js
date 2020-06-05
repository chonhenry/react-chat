import firebase from "../../firebase/firebase";

export const SetCurrentUser = (currentUser) => {
  return { type: "SET_USER", payload: currentUser };
};

export const LoginAction = (credentials) => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(credentials.email, credentials.password)
      .then((cred) => {
        console.log("LOGIN_SUCCESS");
        dispatch({ type: "LOGIN_SUCCESS", payload: cred.user });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};

export const LogoutAction = () => {
  return (dispatch, getState) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        dispatch({ type: "LOGOUT_SUCCESS" });
      })
      .catch((err) => {
        dispatch({ type: "LOGIN_ERROR", err });
      });
  };
};
