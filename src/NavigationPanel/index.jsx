import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { navigationFolders } from "../Data/navigationData";
import { loadNavigationData, loadMailList, setActiveFolder } from "../Actions";
import Inbox_Data from "../Data/inbox.json";
import Spam_Data from "../Data/spam.json";

import "./index.css";

const getItemCount = key => {
  let data = [];
  if (key === "spam") {
    data = Spam_Data;
  } else if (key === "inbox") {
    data = Inbox_Data;
  }
  return data.filter(item => item.unread).length;
};
const NavItem = ({ item: { key, active, title } }) => {
  const dispatch = useDispatch();
  let data = null;
  const onItemClick = () => {
    if (key === "spam") {
      data = Spam_Data;
    } else if (key === "inbox") {
      data = Inbox_Data;
    }
    dispatch(loadMailList(data));
    dispatch(setActiveFolder(key));
  };
  const count = getItemCount(key);
  return (
    <div
      className={`navigationBtn ${active && "active"}`}
      onClick={onItemClick}
    >
      <span>{title}</span>
      <span>{count}</span>
    </div>
  );
};
const NavigationPanel = () => {
  const { mailFolders } = useSelector(state => state);
  const dispatch = useDispatch();
  useEffect(() => {
    console.log("navigation useEffect !!");
    dispatch(loadNavigationData(navigationFolders));
  }, []);

  return (
    <div className="navigationPanel">
      {mailFolders.map(item => (
        <NavItem key={item.key} item={item} />
      ))}
    </div>
  );
};

export default NavigationPanel;
