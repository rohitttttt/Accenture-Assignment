import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteItem, changeFlag, loadSelectedMail } from "../Actions";
import Delete_Icon from "../assets/delete-icon.png";
import Empty_Flag from "../assets/empty-flag.png";
import Fill_Flag from "../assets/fill-flag.png";
import "./index.css";

const MailList = () => {
  const { mailFolders } = useSelector(state => state);

  const dispatch = useDispatch();

  const [filter, setFilter] = useState("all");

  useEffect(() => {
    setFilter("all");
  }, [mailFolders]);

  if (mailFolders.length === 0) {
    return <div>No Data</div>;
  }
  let { key, mailList } = mailFolders.find(a => a.active);
  
  let selectedmail = null;
  const onItemClick = data => {
    selectedmail = data;
    dispatch(loadSelectedMail(selectedmail));
  };
  const onDeleteClick = (event, mId) => {
    event.stopPropagation();
    dispatch(deleteItem(key, mId));
  };

  const onFilterChange = ({ target: { value } }) => setFilter(value);

  const onChangeFlagClick = (event, mId, isFlag) => {
    event.stopPropagation();
    dispatch(changeFlag(key, mId, !isFlag));
  };

  if (mailList.length === 0) {
    return <div className="mailList">No Mail Exists</div>;
  }
  if (filter === "flagged") {
    mailList = mailList.filter(a => a.isFlag);
  }
  return (
    <div className="mailList">
      <div className="filter">
        <span style={{ color: "white" }}>Filter</span>
        <select value={filter} onChange={event => onFilterChange(event)}>
          <option value="all">All</option>
          <option value="flagged">Flagged</option>
        </select>
      </div>

      {mailList.map(data => (
        <div className="item" key={data.mId} onClick={() => onItemClick(data)}>
          <div>
            <span>{data.mId}</span>
            <span>{data.subject}</span>
            <span>{data.content}</span>
          </div>

          <span>
            <img
              src={Delete_Icon}
              onClick={event => onDeleteClick(event, data.mId)}
            />
            <img
              src={data.isFlag ? Fill_Flag : Empty_Flag}
              onClick={event => onChangeFlagClick(event, data.mId, data.isFlag)}
            ></img>
          </span>
        </div>
      ))}

      <div></div>
    </div>
  );
};

export default MailList;
