import React, { useState, useEffect } from "react";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import "../css/Feed.css";
import InputOption from "./InputOption";
import { CalendarViewDay, Event, Subscriptions } from "@material-ui/icons";
import Post from "./Post";
import { db } from "../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import FlipMove from "react-flip-move";

function Feed() {
  const user = useSelector(selectUser);
  const [posts, setPosts] = useState([]);
  const [text, setText] = useState("");

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        )
      );
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("posts").add({
      name: user.displayName,
      description: "This person is a superstar!",
      message: text,
      photoUrl: "",
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
    });

    setText("");
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
      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photUrl } }) => (
          <Post
            key={id}
            name={user.displayName}
            description={description}
            message={message}
            photoUrl={photUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
}

export default Feed;
