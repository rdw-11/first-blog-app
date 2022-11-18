import React from "react";
import { useLocation } from "react-router";

function Post(props) {
  const postData = useLocation();
  const { title, body, publishedOn } = postData.state;
  return (
    <div>
      <h3>{title}</h3>
      <small className="published">Published on {publishedOn}</small>
      <p>{body}</p>
    </div>
  );
}

export default Post;
