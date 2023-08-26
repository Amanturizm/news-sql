import { createAsyncThunk } from '@reduxjs/toolkit';
import axiosApi from '../../axiosApi';
import { INewsItemFormState, INewsItem } from '../../types';

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

export const postOne = createAsyncThunk<void, INewsItemFormState>(
  'news/postOne',
  async (newPost) => {
    const formData = new FormData();

    const keys = Object.keys(newPost) as (keyof INewsItemFormState)[];
    keys.forEach(key => {
      const value = newPost[key];

      if (value !== null) {
        formData.append(key, value);
      }
    });
    await axiosApi.post('/news', formData);
  }
);

export const deleteOne = createAsyncThunk<string, string>(
  'news/deleteOne',
  async (id) => {
    await axiosApi.delete('/news/' + id);

    return id;
  }
);