import React, { useState } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import "../css/Feed.css";
import InputOption from "./InputOption";
import { CalendarViewDay, Event, Subscriptions } from "@material-ui/icons";
import Post from "./Post";

function Feed() {
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input value={text} onChange={(e) => setText(e.target.value)} />
            <button type="submit" onClick={handleSubmit}>
              Send
            </button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption Icon={ImageIcon} title="Photo" color="#70B5F9" />
          <InputOption Icon={Subscriptions} title="Video" color="#E7A33E" />
          <InputOption Icon={Event} title="Event" color="#C0CBCD" />
          <InputOption
            Icon={CalendarViewDay}
            title="Write Article"
            color="#7FC15E"
          />
        </div>
      </div>
      <Post
        name="Robert Gregg"
        description="This is a test Description"
        message="This is a test message"
      />
    </div>
  );
}

export default Feed;
