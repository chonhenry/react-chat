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

const initSelectUserState = { selectedUser: null };
const selectUserReducer = (state = initSelectUserState, action) => {
  switch (action.type) {
    case "SELECT_USER":
      return { ...initSelectUserState, selectedUser: action.payload };
    default:
      return state;
  }
};

const initChatState = { selectedChat: [] };
const chatsReducer = (state = initChatState, action) => {
  switch (action.type) {
    case "SELECT_CHAT":
      return { ...initChatState, selectedChat: action.payload };
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

const toggleSearchResultReducer = (state = false, action) => {
  switch (action.type) {
    case "SEARCH_RESULT":
      return !state;
    default:
      return state;
  }
};

export default combineReducers({
  currentUser: authReducer,
  userInfo: toggleUserInfoReducer,
  showSearchResult: toggleSearchResultReducer,
  selectedUser: selectUserReducer,
  chats: chatsReducer,
  // selectedChat: chatsReducer,
  // userChats: userChatsReducer,
});

// const initUserChats = { userChats: [] };
// const userChatsReducer = (state = initUserChats, action) => {
//   switch (action.type) {
//     case "SET_USER_CHATS":
//       return { ...initUserChats, userChats: action.payload };
//     default:
//       return state;
//   }
// };
