const express = require('express');
const app = express();
const port = 3001;

app.get('/', (req, res) => {
  res.send('Hello, this is updated3  index.js file from Jenkins!');
});

app.listen(port, () => {
  console.log(`App is currently listening at http://localhost:${port}`);
});
