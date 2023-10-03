import { PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import axios from '../../../api/axios';
import { API_ROUTES } from '../../../api/constants';
import { SortOrderVariants } from '../../../components/filterMenu/fitlerMenu.data';

import { PostsReducerState, SortOrder } from './types';

const initialState: PostsReducerState = {
  isLoading: false,
  isError: false,
  posts: [],
  filter: SortOrderVariants.ASC,
};

export const fetchPosts = createAsyncThunk('postsSlice/fetchPosts', async () => {
  const response = await axios.get(`${API_ROUTES.posts}`);
  return response.data;
});

const postsSlice = createSlice({
  name: 'postsSlice',
  initialState,
  reducers: {
    changeFilter(state, action: PayloadAction<SortOrder>) {
      state.filter = action.payload;

      switch (action.payload) {
        case SortOrderVariants.ASC:
          state.posts.sort((a, b) => a.id - b.id);
          break;
        case SortOrderVariants.DESC:
          state.posts.sort((a, b) => b.id - a.id);
          break;
        case SortOrderVariants.TITLE:
          state.posts.sort((a, b) => a.title.localeCompare(b.title));
          break;
        case SortOrderVariants.DESCRIPTION:
          state.posts.sort((a, b) => a.body.localeCompare(b.body));
          break;
        default:
          break;
      }
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPosts.fulfilled, (state, action) => {
      state.isError = false;
      state.isLoading = false;
      state.posts = action.payload;
    });
    builder.addCase(fetchPosts.rejected, (state) => {
      state.isError = true;
      state.isLoading = false;
    });
    builder.addCase(fetchPosts.pending, (state) => {
      state.isError = false;
      state.isLoading = true;
    });
  },
});

export const { changeFilter } = postsSlice.actions;

export default postsSlice.reducer;
