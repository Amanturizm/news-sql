import express from 'express';
import cors from 'cors';

const app = express();
const port = 8000;

app.use(cors());
app.use(express.static('public'));
app.use(express.json());

app.get('*', (_, res) => res.sendStatus(404));

(async () => {

  app.listen(port, () => console.log(`Server running at ${port} port...`));
})().catch(e => console.error(e));