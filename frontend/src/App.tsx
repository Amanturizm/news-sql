import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import News from './features/News/News';
import NewPostForm from './features/NewPostForm/NewPostForm';
import NewsItemFull from './components/NewsFull/NewsFull';
import NotFound from './components/UI/NotFound/NotFound';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/" element={<News />} />
      <Route path="/news" element={<News />} />
      <Route path="/new-post" element={<NewPostForm />} />
      <Route path="/news/new-post" element={<NewPostForm />} />
      <Route path="/:id" element={<NewsItemFull />} />
      <Route path="/news/:id" element={<NewsItemFull />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default App;