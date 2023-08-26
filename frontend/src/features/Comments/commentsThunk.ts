import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { IComment, ICommentFormState } from '../../types';

export const fetchALlCurrentNewsItemComments = createAsyncThunk<IComment[], string>(
  'comments/fetchALlCurrentNewsItemComments',
  async (id) => {
    const { data } = await axiosApi('/comments?news_id=' + id);

    return data;
  }
);

export const postComment = createAsyncThunk<void, { state: ICommentFormState, id_news: string }>(
  'comments/postComment',
  async ({ state, id_news }) => {
    await axiosApi.post('/comments', { ...state, id_news });
  }
);

export const deleteComment = createAsyncThunk<string, string>(
  'comments/deleteComment',
  async (id) => {
    await axiosApi.delete('/comments/' + id);

    return id;
  }
);