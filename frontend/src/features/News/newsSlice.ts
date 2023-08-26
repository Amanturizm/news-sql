import { createSlice } from '@reduxjs/toolkit';
import { INewsItem } from '../../types';
import { fetchAll, fetchOne } from './newsThunk';

interface State {
  news: INewsItem[];
  newsItemFull: INewsItem | null;
}

const initialState: State = {
  news: [],
  newsItemFull: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAll.fulfilled, (state: State, { payload }) => {
      state.news = payload;
    });

    builder.addCase(fetchOne.fulfilled, (state: State, { payload }) => {
      state.newsItemFull = payload;
    });
  }
});

export const newsReducer = newsSlice.reducer;