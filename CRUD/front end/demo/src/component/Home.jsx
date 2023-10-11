import React, { useState } from "react";

function Home(props) {
  const [likeCount, setLikeCount] = useState(props.likes);
  const [dislikeCount, setDislikeCount] = useState(props.dislikes);
  const handleLike = () => {
    setLikeCount(likeCount + 1);
  };
  const handleDislike = () => {
    setDislikeCount(dislikeCount + 1);
  };
  return (
    <div>
      {" "}
      <div class="card" style={{ width: " 18rem" }}>
        <img src={props.img} class="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <p className="card-text">{props.content}</p>
          <div className="btn position-relative" onClick={handleLike}>
            <i className="bi bi-hand-thumbs-up"></i>
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-success">
              {likeCount}
            </span>
          </div>
          <div className="btn position-relative" onClick={handleDislike}>
            <i className="bi bi-hand-thumbs-down"></i>
            <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
              {dislikeCount}
              <span class="visually-hidden">unread messages</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
