import express from 'express';
import cors from 'cors';
import newsRouter from "./routers/news";
import mysqlDb from "./mysqlDb";

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());
app.use('/news', newsRouter);

app.get('*', (_, res) => res.sendStatus(404));

(async () => {
  await mysqlDb.init();

  app.listen(port, () => console.log(`Server running at ${port} port...`));
})().catch(e => console.error(e));