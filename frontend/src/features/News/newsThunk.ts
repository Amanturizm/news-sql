import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { IFormState, INewsItem } from '../../types';

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

export const postOne = createAsyncThunk<void, IFormState>(
  'news/postOne',
  async (newPost) => {
    const formData = new FormData();

    const keys = Object.keys(newPost) as (keyof IFormState)[];
    keys.forEach(key => {
      const value = newPost[key];

      if (value !== null) {
        formData.append(key, value);
      }
    });
    await axiosApi.post('/news', formData);
  }
);