import { FETCH_POSTS_STARTED, FETCH_POSTS_SUCCESS, FETCH_POSTS_FAILED } from "../constants/actionTypes";

const initialState = {
  posts: [],
  success: false,
  error: null,
  loading: false
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POSTS_STARTED:
      return {
        ...state,
        loading: true
      };

    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        posts: action.payload,
        success: true,
        loading: false
      };

    case FETCH_POSTS_FAILED:
      return {
        ...state,
        success: false,
        error: action.payload
      };

    default:
      return state;
  }
}

export default postsReducer;

