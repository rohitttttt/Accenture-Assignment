import {
  LOAD_NAVIGATION_FOLDERS_DATA,
  LOAD_MAIL_LIST_DATA,
  SET_ACTIVE_FOLDER
} from "../Constants/action-types";

export function addArticle(payload) {
  return { type: "ADD_ARTICLE", payload };
}

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
