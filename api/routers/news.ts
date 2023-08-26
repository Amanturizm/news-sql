import express from "express";
import mysqlDb from "../mysqlDb";
import {INewsItem} from "../types";
import {imagesUpload} from "../multer";
import {OkPacketParams} from "mysql2";

const newsRouter = express.Router();

newsRouter.get('/', async (req, res) => {
  const connection = mysqlDb.getConnection();
  const result = await connection.query('SELECT * FROM news');
  res.send(result[0]);
});

newsRouter.get('/:id', async (req, res) => {
  const connection = mysqlDb.getConnection();
  const result = await connection.query(
    'SELECT * FROM news WHERE id = ?',
    [req.params.id]
  );

  const news = result[0] as INewsItem[];

  if (!news[0]) {
    res.status(404).send({"error": "Not Found!"});
    return;
  }

  res.send(news[0]);
});

newsRouter.post('/', imagesUpload.single('image'), async (req, res) => {
  if (!req.body.title || !req.body.content) {
    return res.status(400).send({"error": "No name or content field"});
  }

  const newsItem: Omit<INewsItem, 'id'> = {
    title: req.body.title,
    content: req.body.content,
    image: req.file ? req.file.filename : ''
  };

  const connection = mysqlDb.getConnection();

  const result = await connection.query(
    'INSERT INTO news (title, content, image) VALUES (?, ?, ?)',
    [newsItem.title, newsItem.content, newsItem.image]
  );

  const info = result[0] as OkPacketParams;

  res.send({
    id: info.insertId,
    ...newsItem
  });
});

newsRouter.delete('/:id', async (req, res) => {
  const connection = mysqlDb.getConnection();

  try {
    await connection.query(
      'DELETE FROM news WHERE id = ?',
      [req.params.id]
    );

    res.send('OK');
  } catch (e) {
    res.status(404).send('Not Found!');
  }
});

export default newsRouter;