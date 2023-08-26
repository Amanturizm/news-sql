import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import News from './features/News/News';
import NotFound from './components/UI/NotFound/NotFound';
import NewsItemFull from './components/NewsFull/NewsFull';

const App = () => (
  <Layout>
    <Routes>
      <Route path="/news" element={<News />} />
      <Route path="/news/:id" element={<NewsItemFull />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  </Layout>
);

export default App;