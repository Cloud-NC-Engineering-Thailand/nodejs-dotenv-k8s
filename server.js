'use strict';

require('dotenv').config()

const express = require('express');

// Constants
const PORT = 8080;
const HOST = '0.0.0.0';

// App
const app = express();
app.get('/', (req, res) => {
  res.send('DB Host: '+process.env.DB_HOST+', DB User: '+process.env.DB_USER+', DB Password: '+process.env.DB_PASSWORD);
});

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`);
});

