const express = require('express');
const cors = require('cors');
const { Client } = require('pg');
//require('dotenv').config(); // подключаем dotenv

const app = express();
app.use(cors());

app.get('/health', (req, res) => {
  res.send('Backend OK');
});

app.get('/db-check', async (req, res) => {
  const client = new Client({
    user: String(process.env.PG_USER),
    host: String(process.env.PG_HOST),
    database: String(process.env.PG_DB),
    password: String(process.env.PG_PASSWORD),
    port: parseInt(process.env.PG_PORT || '5432'),
  });

  try {
    await client.connect();
    await client.query('SELECT 1');
    await client.end();
    res.status(200).send('Database OK');
  } catch (error) {
    console.error('DB ERROR:', error);
    res.status(500).send('Database error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});

