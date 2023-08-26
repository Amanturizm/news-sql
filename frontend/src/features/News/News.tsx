import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchAll } from './newsThunk';

const News = () => {
  const dispatch = useAppDispatch();
  const { news } = useAppSelector(state => state.news);

  useEffect(() => {
    dispatch(fetchAll());
  }, [dispatch]);

  return (
    <div>
      {
        JSON.stringify(news)
      }
    </div>
  );
};

export default News;