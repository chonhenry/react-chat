import firebase from "../../firebase/firebase";

export const SetCurrentUser = (currentUser) => {
  return { type: "SET_USER", payload: currentUser };
};

export const toggleUserInfo = () => {
  return {
    type: "USER_INFO",
  };
};

export const toggleSearchResult = () => {
  return {
    type: "SEARCH_RESULT",
  };
};

// export const RegisterAction = (info) => {
//   return (dispatch, getState) => {
//     firebase
//       .auth()
//       .createUserWithEmailAndPassword(info.email, info.password)
//       .then((user) => {
//         console.log("REGISTER_SUCCESS");
//         console.log(user.user);
//         dispatch({ type: "REGISTER_SUCCESS", payload: user.user });
//       })
//       .catch((err) => {
//         console.log(err.message);
//       });
//   };
// };

// export const LoginAction = (credentials) => {
//   return (dispatch, getState) => {
//     firebase
//       .auth()
//       .signInWithEmailAndPassword(credentials.email, credentials.password)
//       .then((user) => {
//         console.log("LOGIN_SUCCESS");
//         console.log(user.user);
//         dispatch({ type: "LOGIN_SUCCESS", payload: user.user });
//       })
//       .catch((err) => {
//         dispatch({ type: "LOGIN_ERROR", err });
//       });
//   };
// };

// export const LogoutAction = () => {
//   return (dispatch, getState) => {
//     firebase
//       .auth()
//       .signOut()
//       .then(() => {
//         dispatch({ type: "LOGOUT_SUCCESS" });
//       })
//       .catch((err) => {
//         dispatch({ type: "LOGIN_ERROR", err });
//       });
//   };
// };
