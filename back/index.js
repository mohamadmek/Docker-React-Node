var express = require('express');
var app = express();

app.get('/', (req, res) => {
  res.send('Hello from docker back');
});

app.listen(8283, () => {
  console.log('app listening on port 8283');
});