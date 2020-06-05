import { combineReducers } from "redux";
import firebase from "../../firebase/firebase";

const initAuthState = { currentUser: null };

const authReducer = (state = initAuthState, action) => {
  switch (action.type) {
    case "SET_USER":
      return { ...initAuthState, currentUser: action.payload };
    case "LOGIN_SUCCESS":
      return { ...initAuthState, currentUser: action.payload };
    case "LOGOUT_SUCCESS":
      return { ...initAuthState, currentUser: null };
    default:
      return state;
  }
};

export default combineReducers({
  currentUser: authReducer,
});
