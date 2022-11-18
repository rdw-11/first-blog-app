import { useEffect, useState } from "react";
import { Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { API } from "../utils/API";
import { trimText } from "../utils/common";
import HashTag from "./HashTag";

function CardPost(props) {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();
  const getPosts = async () => {
    const posts = await API.get("posts");
    console.log(posts);
    if (posts.data && posts.data.posts && posts.data.posts.length) {
      setPosts(posts.data.posts);
    }
  };
  useEffect(() => {
    getPosts();
  }, []);

  const handleClick = (data) => {
    navigate("/post", { state: data });
  };

  return (
    <>
      {posts &&
        posts.map((postData) => {
          return (
            <Col>
              <Card style={{ width: "18rem" }}>
                <Card.Img variant="top" src={postData.img} />
                <Card.Body>
                  <Card.Title>{postData.title}</Card.Title>
                  <Card.Text>{trimText(postData.body, 160)}...</Card.Text>
                  <HashTag tags={postData.tags} />
                  <Button
                    onClick={() => handleClick(postData)}
                    variant="primary"
                  >
                    Read More
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
    </>
  );
}

export default CardPost;
