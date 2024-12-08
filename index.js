const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, is index.js from Jenkins !');
});

app.listen(port, () => {
  console.log(`App is currently listening at http://localhost:${port}`);
});
