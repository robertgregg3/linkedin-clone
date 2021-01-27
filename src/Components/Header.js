import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import LinkedIn from "../images/linkedin.svg";
import HeaderOption from "./HeaderOption";
import HomeIcon from "@material-ui/icons/Home";
import AppsIcon from "@material-ui/icons/Apps";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import {
  BusinessCenter,
  Chat,
  ExploreOutlined,
  Notifications,
} from "@material-ui/icons";
import "../css/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="header__container">
        <div className="header__left">
          <img src={LinkedIn} alt="" />
          <div className="header__search">
            <SearchIcon />
            <input type="text" />
          </div>
        </div>
        <div className="header__right">
          <HeaderOption title="Home" Icon={HomeIcon} />
          <HeaderOption title="My Network" Icon={SupervisorAccount} />
          <HeaderOption title="Jobs" Icon={BusinessCenter} />
          <HeaderOption title="Messaging" Icon={Chat} />
          <HeaderOption title="Jobs" Icon={Notifications} />
          <HeaderOption
            title="Me"
            avatar="https://compassionate-leakey-e9b16b.netlify.app/images/IG_Sonny.jpeg"
          />
        </div>
        <div className="header__farRight">
          <HeaderOption title="Work" Icon={AppsIcon} />
          <HeaderOption title="Sales Nav" Icon={ExploreOutlined} />
        </div>
      </div>
    </div>
  );
}

export default Header;
