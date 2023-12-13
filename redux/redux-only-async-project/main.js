const { createStore, applyMiddleware } = require('redux');
const thunk = require('redux-thunk').default;

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const FETCH_STARTED = 'FETCH_STARTED';
const FETCH_SUCCESS = 'FETCH_SUCCESS';
const FETCH_FAILED = 'FETCH_FAILED';

const fetchPosts = (url) => (dispatch) => {
  dispatch(fetchPostsStarted());

  fetch(url)
  .then(data => {
    return data.json();
  }).then(data => {
    dispatch(fetchPostsSuccess(data));
  }).catch(e => {
    dispatch(fetchPostFailed(e.message));
  })
}

const fetchPostsStarted = () => ({
  type: FETCH_STARTED,
});

const fetchPostsSuccess = (posts) => ({
  type: FETCH_SUCCESS,
  payload: {
    posts: posts
  }
});

const fetchPostFailed = (error) => ({
  type: FETCH_FAILED,
  payload: {
    error: error
  }
});

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STARTED:
      return {
        ...state,
        loading: true,
      }

    case FETCH_SUCCESS:
      return {
        ...state,
        posts: action.payload.posts,
        loading: false,
      }

    case FETCH_FAILED:
      return {
        ...state,
        loading: false,
        error: action.payload.error
      }
  }
}

const store = createStore(postsReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(fetchPosts('https://jsonplaceholder.typicode.com/posts'));

