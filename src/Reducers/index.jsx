import {
  LOAD_NAVIGATION_FOLDERS_DATA,
  LOAD_MAIL_LIST_DATA,
  SET_ACTIVE_FOLDER,
  LOAD_SELECTED_MAIL
} from "../Constants/action-types";

const initialState = {
  mailFolders: [],
  mailList: [],
  mailPreview: {}
};

function rootReducer(state = initialState, { payload, type }) {
  if (type === LOAD_NAVIGATION_FOLDERS_DATA) {
    state = { ...state, mailFolders: payload };
  } else if (type === LOAD_MAIL_LIST_DATA) {
    state = { ...state, mailList: payload };
  } else if (type === SET_ACTIVE_FOLDER) {
    const mailFolders = [...state.mailFolders].map(folder => ({
      ...folder,
      active: folder.key === payload
    }));

    state = { ...state, mailFolders };
  } else if(type === LOAD_SELECTED_MAIL) {
    state = { ...state, mailPreview: payload };
  }

  return state;
}

export default rootReducer;
