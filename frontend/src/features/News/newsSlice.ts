import { createSlice } from '@reduxjs/toolkit';
import { INewsItem } from '../../types';
import { deleteOne, fetchAll, fetchOne, postOne } from './newsThunk';

interface State {
  news: INewsItem[];
  newsItemFull: INewsItem | null;
  newsLoading: boolean;
  newsItemFullLoading: boolean;
  postLoading: boolean;
  deleteLoading: string | null;
}

const initialState: State = {
  news: [],
  newsItemFull: null,
  newsLoading: false,
  newsItemFullLoading: false,
  postLoading: false,
  deleteLoading: null,
};

const newsSlice = createSlice({
  name: 'news',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchAll.pending, (state: State) => {
      state.newsLoading = true;
    });
    builder.addCase(fetchAll.fulfilled, (state: State, { payload }) => {
      state.news = payload;
      state.newsLoading = false;
    });
    builder.addCase(fetchAll.rejected, (state: State) => {
      state.newsLoading = false;
    });

    builder.addCase(fetchOne.pending, (state: State) => {
      state.newsItemFullLoading = true;
    });
    builder.addCase(fetchOne.fulfilled, (state: State, { payload }) => {
      state.newsItemFull = payload;
      state.newsItemFullLoading = false;
    });
    builder.addCase(fetchOne.rejected, (state: State) => {
      state.newsItemFullLoading = false;
    });

    builder.addCase(postOne.pending, (state: State) => {
      state.postLoading = true;
    });

    builder.addCase(postOne.fulfilled, (state: State) => {
      state.postLoading = false;
    });

    builder.addCase(postOne.rejected, (state: State) => {
      state.postLoading = false;
    });

    builder.addCase(deleteOne.pending, (state: State) => {
      state.deleteLoading = null;
    });

    builder.addCase(deleteOne.fulfilled, (state: State, { payload }) => {
      state.deleteLoading = payload;
    });

    builder.addCase(deleteOne.rejected, (state: State) => {
      state.deleteLoading = null;
    });
  }
});

export const newsReducer = newsSlice.reducer;