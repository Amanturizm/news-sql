import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { IComment } from '../../types';

export const fetchALlCurrentNewsItem = createAsyncThunk<IComment[], string>(
  'comments/fetchALlCurrentNewsItem',
  async (id) => {
    const { data } = await axiosApi('/comments?news_id=' + id);

    return data;
  }
);