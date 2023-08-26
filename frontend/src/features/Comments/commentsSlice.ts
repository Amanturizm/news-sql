import { createSlice } from '@reduxjs/toolkit';
import { IComment } from '../../types';
import { deleteComment, fetchALlCurrentNewsItemComments, postComment } from './commentsThunk';

interface State {
  comments: IComment[];
  commentsLoading: boolean;
  postCommentLoading: boolean;
  deleteCommentLoading: string | null;
}

const initialState: State = {
  comments: [],
  commentsLoading: false,
  postCommentLoading: false,
  deleteCommentLoading: null,
};

const commentsSlice = createSlice({
  name: 'comments',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchALlCurrentNewsItemComments.pending, (state: State) => {
      state.commentsLoading = true;
    });
    builder.addCase(fetchALlCurrentNewsItemComments.fulfilled, (state: State, { payload }) => {
      state.comments = payload;
      state.commentsLoading = false;
    });
    builder.addCase(fetchALlCurrentNewsItemComments.rejected, (state: State) => {
      state.commentsLoading = false;
    });

    builder.addCase(postComment.pending, (state: State) => {
      state.postCommentLoading = true;
    });

    builder.addCase(postComment.fulfilled, (state: State) => {
      state.postCommentLoading = false;
    });

    builder.addCase(postComment.rejected, (state: State) => {
      state.postCommentLoading = false;
    });

    builder.addCase(deleteComment.pending, (state: State) => {
      state.deleteCommentLoading = null;
    });

    builder.addCase(deleteComment.fulfilled, (state: State, { payload }) => {
      state.deleteCommentLoading = payload;
    });

    builder.addCase(deleteComment.rejected, (state: State) => {
      state.deleteCommentLoading = null;
    });
  }
});

export const commentsReducer = commentsSlice.reducer;