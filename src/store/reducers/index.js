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
    default:
      return state;
  }
};

const initSelectUserState = {};
const selectUserReducer = (state = initSelectUserState, action) => {
  switch (action.type) {
    case "SELECT_USER":
      return action.payload;
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

const toggleRemoveChatReducer = (state = false, action) => {
  switch (action.type) {
    case "REMOVE_CHAT":
      return !state;
    default:
      return state;
  }
};

const initChatsListState = [];
const chatsListReducer = (state = initChatsListState, action) => {
  switch (action.type) {
    case "SET_CHAT_LIST":
      return action.payload;
    default:
      return state;
  }
};

const initMessagesListState = [];
const messagesListReducer = (state = initMessagesListState, action) => {
  switch (action.type) {
    case "SET_MESSAGE_LIST":
      return action.payload;
    default:
      return state;
  }
};

const initSelectedChatState = "";
const selectedChatReducer = (state = initSelectedChatState, action) => {
  switch (action.type) {
    case "SELECT_CHAT":
      return action.payload;
    default:
      return state;
  }
};

export default combineReducers({
  currentUser: authReducer,
  userInfo: toggleUserInfoReducer,
  showSearchResult: toggleSearchResultReducer,
  selectedUser: selectUserReducer,
  chatsList: chatsListReducer,
  messagesList: messagesListReducer,
  selectedChat: selectedChatReducer,
  showRemoveChat: toggleRemoveChatReducer,
  //chats: chatsReducer,
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

// const initChatState = { selectedChat: [] };
// const chatsReducer = (state = initChatState, action) => {
//   switch (action.type) {
//     case "SELECT_CHAT":
//       return { ...state, selectedChat: action.payload };
//     default:
//       return state;
//   }
// };
