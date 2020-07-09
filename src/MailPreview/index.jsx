import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./index.css";

const MailPreview = () => {
  const { mailPreview } = useSelector(state => state);
  const dispatch = useDispatch();
  let maildetails;

  if (Object.keys(mailPreview).length === 0) {
    maildetails= <div className="openmail">Select an item to read</div>;
    return maildetails;
  }else
  {
      maildetails =  <div className="mailPreviewList"> <h1>{mailPreview.subject}</h1>
                      <p dangerouslySetInnerHTML={{__html: mailPreview.content}}></p>
                      </div>
      return maildetails;
  }
};

export default MailPreview;
