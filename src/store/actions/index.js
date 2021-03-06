import firebase from "../../firebase/firebase";

export const SetCurrentUser = (currentUser) => {
  return { type: "SET_USER", payload: currentUser };
};

export const SetCurrentUserOnRegister = (rergisteredUser) => {
  return { type: "SET_USER_ON_REGISTER", payload: rergisteredUser };
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

export const toggleRemoveChat = () => {
  return {
    type: "REMOVE_CHAT",
  };
};

export const setChatsList = (chatsList) => {
  return {
    type: "SET_CHAT_LIST",
    payload: chatsList,
  };
};

export const setMessagesList = (messagesList) => {
  return {
    type: "SET_MESSAGE_LIST",
    payload: messagesList,
  };
};

export const selectUser = (selectedUserUid) => {
  return async (dispatch) => {
    let selectedUser;

    if (selectedUserUid.length) {
      firebase
        .firestore()
        .collection("users")
        .where("uid", "==", selectedUserUid)
        .get()
        .then((snapshot) => {
          selectedUser = snapshot.docs[0].data();
          dispatch({ type: "SELECT_USER", payload: selectedUser });
        });
    } else {
      dispatch({ type: "SELECT_USER", payload: {} });
    }
  };
};

export const selectChat = (selectedChat) => {
  return { type: "SELECT_CHAT", payload: selectedChat };
};
