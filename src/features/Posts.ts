import { createSlice } from '@reduxjs/toolkit';
import { PostsData } from '../DummyData';

export const postSlice: {
  actions: { addPost: any; deletePost: any; }; reducer: any;
} = createSlice({
  name: "posts",
  initialState: {value: PostsData},
  reducers: {
    // 記事投稿のReducer
    addPost: (state: { value: any[]; }, action: { payload: any; }) => {
      state.value.push(action.payload);
    },
    // 記事削除のReducer
    deletePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id); // id不一致のものを残す=id一致したものは削除
    }
  }
});

export const { addPost, deletePost } = postSlice.actions;
export default postSlice.reducer;
