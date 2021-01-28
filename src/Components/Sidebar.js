import { Avatar } from "@material-ui/core";
import React from "react";
import Bg from "../images/bg.jpg";
import "../css/Sidebar.css";

function Sidebar() {
  const recentItem = (topic) => (
    <div className="sidebar__recentItems">
      <span className="sidebar__hash">#</span>
      <p>{topic}</p>
    </div>
  );

  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={Bg} alt="" />
        <Avatar className="sidebar__avatar" />
        <h2>Robert Gregg</h2>
        <h4>hi@robertgregg.co.uk</h4>
      </div>
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewed you</p>
          <p className="sidebar__statNumber">243</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">333</p>
        </div>
      </div>

      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactJs")}
        {recentItem("programming")}
        {recentItem("frontend")}
        {recentItem("javascript")}
        {recentItem("NoSql")}
      </div>
    </div>
  );
}

export default Sidebar;
