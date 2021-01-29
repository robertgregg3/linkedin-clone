import React from "react";
import "../css/HeaderOption.css";
import { Avatar } from "@material-ui/core";

function HeaderOption({ title, Icon, avatar, onClick }) {
  return (
    <div onClick={onClick} className="headerOption">
      {Icon && <Icon className="headerOption__icon" />}
      {avatar && <Avatar className="headerOption__icon avatar" src={avatar} />}
      <h3 className="headerOption__title">{title}</h3>
    </div>
  );
}

export default HeaderOption;
