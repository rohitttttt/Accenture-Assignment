import React from "react";
import NavigationPanel from "../NavigationPanel";
import MailList from "../MailList";
import Header from "../Header";
import "./index.css";

const Main = () => (
  <div className="mainContainer">
    <Header />
    <div className="mainBody">
      <NavigationPanel />

      <MailList />
    </div>
  </div>
);

export default Main;
