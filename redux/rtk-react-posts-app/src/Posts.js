import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "./slices/postsSlice";

const Posts = () => {
  const dispatch = useDispatch();
  const { posts, loading, error } = useSelector(store => ({
    posts: store.posts,
    loading: store.loading,
    error: store.loading
  }));

  useEffect(() => {
    dispatch(fetchPosts());
  }, []);

  return (
    <div>
      <form>
        <input name="postId"/>
        <button>Search</button>
      </form>
      <div>
        {posts ? posts.map(i => (
          <div>
            <b>{i.title}</b>
            <br />
            <div>{i.body}</div>
          </div>
        )) : loading ? (
          <div>
            Loading...
          </div>
        ) : (
          <div>
            {error.message}
          </div>
        )}
      </div>
    </div>
  )
}

export default Posts;

