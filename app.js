const express = require('express');
const app = express();
const path = require('path');
const port = 3040;
const userRouter = require('./route')

app.use(express.static('route'));

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})