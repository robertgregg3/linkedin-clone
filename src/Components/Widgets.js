import React from "react";
import InfoIcon from "@material-ui/icons/Info";
import "../css/Widgets.css";
import { FiberManualRecord } from "@material-ui/icons";

function Widgets() {
  const newsArticle = (heading, subtitle) => (
    <div className="widgets__article">
      <div className="widgets__articleLeft">
        <FiberManualRecord />
      </div>
      <div className="widgets__articleRight">
        <h4>{heading}</h4>
        <p>{subtitle}</p>
      </div>
    </div>
  );

  return (
    <div className="widgets">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newsArticle(
        "Rob built ANOTHER project",
        "Take a look and see what you think"
      )}
      {newsArticle(
        "Is it true? You are looking for work?",
        "You will be snapped up in no time!"
      )}
      {newsArticle("Can we arrange an interview?", "Would love to chat more")}
    </div>
  );
}

export default Widgets;
