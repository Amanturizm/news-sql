import { createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../types';
import { fetchALlCurrentNewsItem } from './commentsThunk';

interface State {
  comments: IComment[];
}

const initialState: State = {
  comments: [],
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchALlCurrentNewsItem.fulfilled, (state: State, { payload }) => {
      state.comments = payload;
    });
  }
});

export const commentsReducer = commentsSlice.reducer;