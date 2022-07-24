import React from "react";
import "./Post.css";
import { useSelector, useDispatch } from "react-redux";

interface PostProps {
  img?: string;
  header?: string;
  description?: string;
  id?: number;
}

const Post = ({ img, header, description }: PostProps) => {
  return (
    <div className="CardOne">
      <div className="block">
        <img className="image" src={img} alt="image" />
        <div className="wrapperPost">
          <h1>{header}</h1>
          <p>{description}</p>
        </div>
      </div>
    </div>
  );
};

export default Post;
