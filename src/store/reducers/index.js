import { combineReducers } from "redux";
// import firebase from "../../firebase/firebase";

const initAuthState = { currentUser: null, isLoading: true };

const authReducer = (state = initAuthState, action) => {
  switch (action.type) {
    case "SET_USER":
      return {
        ...initAuthState,
        currentUser: action.payload,
        isLoading: false,
      };
    // case "LOGIN_SUCCESS":
    //   return {
    //     ...initAuthState,
    //     currentUser: action.payload,
    //     isLoading: false,
    //   };
    // case "LOGOUT_SUCCESS":
    //   return { ...initAuthState, currentUser: null, isLoading: true };
    // case "REGISTER_SUCCESS":
    //   return {
    //     ...initAuthState,
    //     currentUser: action.payload,
    //     isLoading: false,
    //   };
    default:
      return state;
  }
};

const toggleUserInfoReducer = (state = false, action) => {
  switch (action.type) {
    case "USER_INFO":
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  currentUser: authReducer,
  userInfo: toggleUserInfoReducer,
});
