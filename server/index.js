const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const port = process.env.PORT || 7000;
const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(port, () => {
  console.log(`app is running on port ${port}`);
});