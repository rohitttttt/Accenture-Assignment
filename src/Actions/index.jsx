import {
  LOAD_NAVIGATION_FOLDERS_DATA,
  LOAD_MAIL_LIST_DATA,
  SET_ACTIVE_FOLDER,
  LOAD_SELECTED_MAIL,
  DELETE_ITEM,
  CHANGE_FLAG
} from "../Constants/action-types";

export const loadNavigationData = payload => ({
  type: LOAD_NAVIGATION_FOLDERS_DATA,
  payload
});

export const loadMailList = (data, key) => ({
  type: LOAD_MAIL_LIST_DATA,
  payload: { data, key }
});

export const setActiveFolder = payload => ({
  type: SET_ACTIVE_FOLDER,
  payload
});

export const loadSelectedMail = payload => ({
  type: LOAD_SELECTED_MAIL,
  payload
});

export const deleteItem = (key, mId) => ({
  type: DELETE_ITEM,
  payload: { key, mId }
});

export const changeFlag =(key ,mId, isFlag) => ({
  type : CHANGE_FLAG,
  payload : {key , mId, isFlag}
})
