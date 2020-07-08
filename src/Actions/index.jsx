import {
  LOAD_NAVIGATION_FOLDERS_DATA,
  LOAD_MAIL_LIST_DATA,
  SET_ACTIVE_FOLDER,
  LOAD_SELECTED_MAIL
} from "../Constants/action-types";


export const loadNavigationData = payload => ({
  type: LOAD_NAVIGATION_FOLDERS_DATA,
  payload
});

export const loadMailList = payload => ({
  type: LOAD_MAIL_LIST_DATA,
  payload
});

export const setActiveFolder = payload => ({
  type: SET_ACTIVE_FOLDER,
  payload
});

export const loadSelectedMail = payload => ({
  type : LOAD_SELECTED_MAIL,
  payload
})
