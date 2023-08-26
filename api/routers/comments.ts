import express from "express";
import mysqlDb from "../mysqlDb";
import {imagesUpload} from "../multer";
import {OkPacketParams} from "mysql2";
import {IComment} from "../types";

const commentsRouter = express.Router();

commentsRouter.get('/', async (req, res) => {
  const connection = mysqlDb.getConnection();

  if (req.query.news_id) {
    const result = await connection.query('SELECT * FROM comments WHERE id_news = ?', [req.query.news_id]);

    res.send(result[0]);
    return;
  }

  const result = await connection.query('SELECT * FROM comments');
  res.send(result[0]);
});

commentsRouter.get('/:id', async (req, res) => {
  const connection = mysqlDb.getConnection();
  const result = await connection.query(
    'SELECT * FROM comments WHERE id = ?',
    [req.params.id]
  );

  const comments = result[0] as IComment[];

  if (!comments[0]) {
    res.status(404).send({"error": "Not Found!"});
    return;
  }

  res.send(comments[0]);
});

commentsRouter.post('/', imagesUpload.single('image'), async (req, res) => {
  if (!req.body.id_news || !req.body.text) {
    return res.status(400).send({"error": "No id_news or text field"});
  }

  const comment: Omit<IComment, 'id'> = {
    id_news: req.body.id_news,
    author: req.body.author || 'Anonymous',
    text: req.body.text,
  };

  const connection = mysqlDb.getConnection();

  const result = await connection.query(
    'INSERT INTO comments (id_news, author, text) VALUES (?, ?, ?)',
    [comment.id_news, comment.author, comment.text]
  );

  const info = result[0] as OkPacketParams;

  res.send({
    id: info.insertId,
    ...comment
  });
});

commentsRouter.delete('/:id', async (req, res) => {
  const connection = mysqlDb.getConnection();

  try {
    await connection.query(
      'DELETE FROM comments WHERE id = ?',
      [req.params.id]
    );

    res.send('OK');
  } catch (e) {
    res.status(404).send('Not Found!');
  }
});

export default commentsRouter;