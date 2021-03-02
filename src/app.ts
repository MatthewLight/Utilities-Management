import express from 'express';
import * as dotenv from 'dotenv';

dotenv.config();

const app = express();

app.get('/', (req, res) => {
  res.json({ msg: '200' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
