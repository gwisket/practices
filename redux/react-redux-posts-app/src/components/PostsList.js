import React, { useEffect } from "react";
import SearchPost from "./SearchPost";
import "./Posts.css";
import { fetchPosts } from "../actions/PostActions";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";

const PostsList = () => {
  const { loading, posts, error } = useSelector(store => ({
    loading: store.loading,
    posts: store.posts,
    error: store.error
  }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <>
      <SearchPost />
      {loading ?
        <div>Loading...</div>
      : error ?
        <div>{error.message}</div>
      :
        <div className="posts-list">
          <h1>Total Posts {posts.length}</h1>
          {posts.map(i => (
            <div className="post-details" key={uuidv4()}>
              <h3>{i.title}</h3>
              <p>{i.body}</p>
            </div>
          ))}
        </div>
      }
    </>
  );
};

export default PostsList;
