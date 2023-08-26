import { createSlice } from '@reduxjs/toolkit';
import { INewsItem } from '../../types';
import { fetchAll } from './newsThunk';

interface State {
  news: INewsItem[];
}

const initialState: State = {
  news: []
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAll.fulfilled, (state: State, { payload }) => {
      state.news = payload;
    });
  }
});

export const newsReducer = newsSlice.reducer;