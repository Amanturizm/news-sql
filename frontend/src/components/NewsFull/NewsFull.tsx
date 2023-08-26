import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hook';
import { fetchOne } from '../../features/News/newsThunk';
import { useParams } from 'react-router-dom';
import NewsItemFull from '../NewsItemFull/NewsItemFull';
import { fetchALlCurrentNewsItem } from '../../features/Comments/commentsThunk';
import Comments from '../Comments/Comments';

const NewsFull = () => {
  const { id } = useParams() as { id: string };

  const dispatch = useAppDispatch();
  const { newsItemFull } = useAppSelector(state => state.news);
  const { comments } = useAppSelector(state => state.comments);

  useEffect(() => {
    if (id) {
      dispatch(fetchOne(id));
      dispatch(fetchALlCurrentNewsItem(id));
    }
  }, [id, dispatch]);

  return (
    <div>
      {
        newsItemFull ? <NewsItemFull fullItem={newsItemFull} /> : null
      }

      {
        comments ? <Comments comments={comments} /> : null
      }
    </div>
  );
};

export default NewsFull;