const { createSlice, createAsyncThunk, configureStore } = require("@reduxjs/toolkit");
const { logger } = require('redux-logger');

const API = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  posts: [],
  loading: false,
  error: null
};

const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const res = await fetch(API);
  const data = await res.json();
  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder.addCase(fetchPosts.pending, state => {
      state.loading = true;
    }).addCase(fetchPosts.fulfilled, (state, action) => {
      state.loading = false;
      state.posts = action.payload;
    }).addCase(fetchPosts.rejected, (state, action) => {
      state.posts = [];
      state.loading = false;
      state.error = action.payload;
    });
  }
});

const store = configureStore({
  reducer: postsSlice.reducer,
  // middleware: [logger]
});

store.subscribe(() => {
  console.log(store.getState());
})

store.dispatch(fetchPosts());

