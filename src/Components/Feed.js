import { createSvgIcon } from "@material-ui/core";
import React from "react";
import CreateIcon from "@material-ui/icons/Create";
import "../css/Feed.css";

function Feed() {
  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Feed;
