import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadMailList } from "../Actions";
import Inbox_Data from "../Data/inbox.json";
import "./index.css";

const MailList = () => {
  const { mailList } = useSelector(state => state);
  const dispatch = useDispatch();
  const d = new Date();
  useEffect(() => {
    dispatch(loadMailList(Inbox_Data));
  }, []);

  const onItemClick = data => {};
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
        </div>
      ))}
    </div>
  );
};

export default MailList;
