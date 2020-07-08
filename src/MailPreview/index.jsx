import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";
//import { loadMailList } from "../Actions";

const MailPreview = () => {
  debugger;
  const { mailPreview } = useSelector(state => state);
  const dispatch = useDispatch();

  return (
    <div className="mailPreviewList">
      <h1>{mailPreview.subject}</h1>

      <p dangerouslySetInnerHTML={{__html: mailPreview.content}}></p>
    </div>
  );
};

export default MailPreview;
