const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../build')));

app.listen(3000, function () {
  console.log("Production Server: Listening on port 3000!");
});