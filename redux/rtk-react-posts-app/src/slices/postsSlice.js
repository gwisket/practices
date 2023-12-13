import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  loading: false,
  error: null
};

export const fetchPosts = createAsyncThunk('posts/fetch', async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();
  return data;
});

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(fetchPosts.pending, state => {
        state.loading = true;
      }).addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.posts = action.payload;
      }).addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.posts = [];
      });
  }
});

export default postsSlice.reducer;

