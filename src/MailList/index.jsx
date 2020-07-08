import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMailList,loadSelectedMail } from "../Actions";
import Inbox_Data from "../Data/inbox.json";
import "./index.css";

const MailList = () => {
  const { mailList } = useSelector(state => state);
  const dispatch = useDispatch();
  const d = new Date();
  useEffect(() => {
    dispatch(loadMailList(Inbox_Data));
  }, []);
  let selectedmail = null;
  const onItemClick = data => {
      selectedmail = data;
      dispatch(loadSelectedMail(selectedmail));
  };
  return (
    <div className="mailList">
      {mailList.map(data => (
        <div className="item" key={data.mId} onClick={() => onItemClick(data)}>
          <div>
            <span>{data.mId}</span>
            <span>{data.subject}</span>
            <span>{data.content}</span>
          </div>
          <span>
            {d.getHours()} : {d.getMinutes()}
          </span>
          <button className='task__remove-icon'>Remove</button>
        </div>
      ))}
    </div>
  );
};

export default MailList;
