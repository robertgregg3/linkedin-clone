import React, { forwardRef } from "react";
import { Avatar } from "@material-ui/core";
import "../css/Post.css";
import InputOption from "./InputOption";
import { useSelector } from "react-redux";
import {
  ChatOutlined,
  SendOutlined,
  ShareOutlined,
  ThumbUpAltOutlined,
} from "@material-ui/icons";
import { selectUser } from "../features/userSlice";

const Post = forwardRef(({ name, description, message }, ref) => {
  const user = useSelector(selectUser);

  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar>{user.email[0].toUpperCase()}</Avatar>
        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpAltOutlined} title="Like" color="gray" />
        <InputOption Icon={ChatOutlined} title="Comment" color="gray" />
        <InputOption Icon={ShareOutlined} title="Share" color="gray" />
        <InputOption Icon={SendOutlined} title="Send" color="gray" />
      </div>
    </div>
  );
});

export default Post;
