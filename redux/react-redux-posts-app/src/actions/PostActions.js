import { FETCH_POSTS_STARTED, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILED } from "../constants/actionTypes";

export const fetchPostsStarted = () => ({
  type: FETCH_POSTS_STARTED
});

export const fetchPostsSuccess = (posts) => ({
  type: FETCH_POSTS_SUCCESS,
  payload: posts
});

export const fetchPostsFailed = (error) => ({
  type: FETCH_POSTS_FAILED,
  payload: error
});

export const fetchPosts = () => async (dispatch) => {
  dispatch(fetchPostsStarted());

  let posts;

  try {
    const temp = await fetch("https://jsonplaceholder.typicode.com/posts");
    posts = await temp.json();
  } catch (error) {
    dispatch(fetchPostsFailed(error));
  }

  dispatch(fetchPostsSuccess(posts));
}

export const fetchPost = (postId) => async (dispatch) => {
  dispatch(fetchPostsStarted());

  let post;

  try {
    const temp = await fetch("https://jsonplaceholder.typicode.com/posts/" + postId);
    post = await temp.json();
  } catch (error) {
    dispatch(fetchPostsFailed(error));
  }

  dispatch(fetchPostsSuccess([post]));
}
