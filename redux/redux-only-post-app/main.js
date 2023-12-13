const { createStore, combineReducers } = require('redux');

const initialState = {
  posts: [],
  users: [],
};

const CREATE_POST = 'CREATE_POST';
const DELETE_POST = 'DELETE_POST';
const CREATE_USER = 'CREATE_USER';
const DELETE_USER = 'DELETE_USER';

let postId = 0;
let userId = 0;

const createPost = (title, content) => ({
  type: CREATE_POST,
  payload: {
    id: postId ++,
    title: title,
    content: content
  }
});

const deletePost = (id) => ({
  type: DELETE_POST,
  payload: {
    id: id
  }
});

const createUser = (name, nickname) => ({
  type: CREATE_USER,
  payload: {
    id: userId ++,
    name: name,
    nickname: nickname
  }
});

const deleteUser = (id) => ({
  type: DELETE_USER,
  payload: {
    id: id
  }
});

const postReducer = (state = initialState.posts, action) => {
  switch (action.type) {
    case CREATE_POST:
      return [...state, action.payload];

    case DELETE_POST:
      return state.filter(i => i.id !== action.payload.id);

    default:
      return state;
  }
}

const userReducer = (state = initialState.users, action) => {
  switch (action.type) {
    case CREATE_USER:
      return [...state, action.payload];

    case DELETE_USER:
      return state.filter(i => i.id !== action.payload.id);

    default:
      return state;
  }
}

const rootReducer = combineReducers({
  posts: postReducer,
  users: userReducer,
});

const store = createStore(rootReducer);

store.subscribe(() => {
  console.log(store.getState());
});

store.dispatch(createPost('a', 'b'));
store.dispatch(createPost('c', 'd'));
store.dispatch(deletePost(0));

store.dispatch(createUser('hi', 'hello'));
store.dispatch(deleteUser(0));

