import {
  LOAD_NAVIGATION_FOLDERS_DATA,
  LOAD_MAIL_LIST_DATA,
  SET_ACTIVE_FOLDER,
  LOAD_SELECTED_MAIL,
  DELETE_ITEM,
  CHANGE_FLAG
} from "../Constants/action-types";

const localState = localStorage.getItem("mailData");   //Purpose of using local storage : State and Navigation will be save between refreshed
const initialState = JSON.parse(localState) || {
  mailFolders: [],
  mailList: [],
  mailPreview: {}
};

function rootReducer(state = initialState, { payload, type }) {
  
  if (type === LOAD_NAVIGATION_FOLDERS_DATA) {
    state = { ...state, mailFolders: payload };
  } else if (type === LOAD_MAIL_LIST_DATA) {
    const mailFolders = [...state.mailFolders];
    const record = mailFolders.find(a => a.key === payload.key);
    record.mailList = payload.data;
    state = { ...state, mailFolders };
  } else if (type === SET_ACTIVE_FOLDER) {
    const mailFolders = [...state.mailFolders].map(folder => ({
      ...folder,
      active: folder.key === payload
    }));

    state = { ...state, mailFolders };
  } else if (type === LOAD_SELECTED_MAIL) {
    state = { ...state, mailPreview: payload };
  } else if (type === DELETE_ITEM) {
    const mailFolders = [...state.mailFolders];
    const record = mailFolders.find(a => a.key === payload.key);
    const recordToDelete = record.mailList.find(a => a.mId === payload.mId);
    mailFolders
      .find(a => a.key === "deleteditems")
      .mailList.unshift({ ...recordToDelete });
    record.mailList = record.mailList.filter(a => a.mId !== payload.mId);
    state = { ...state, mailFolders };
  } else if (type === CHANGE_FLAG) {
    const mailFolders = [...state.mailFolders];
    const mailFolder = mailFolders.find(a => a.key === payload.key);
    const record = mailFolder.mailList.find(a => a.mId === payload.mId);
    record.isFlag = payload.isFlag;
    state = { ...state, mailFolders };
  }
  localStorage.setItem("mailData", JSON.stringify(state));
  return state;
}

export default rootReducer;
