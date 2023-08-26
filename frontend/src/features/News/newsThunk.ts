import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { INewsItem } from '../../types';

export const fetchAll = createAsyncThunk<INewsItem[]>(
  'news/fetchAll',
  async () => {
    const { data } = await axiosApi('/news');

    return data;
  }
);

export const fetchOne = createAsyncThunk<INewsItem, string>(
  'news/fetchOne',
  async (id) => {
    const { data } = await axiosApi('/news/' + id);

    return data;
  }
);