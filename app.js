const express = require('express');
const app = express();
const port = 3040;

app.get('/', (req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'})
  res.end("hello")
})

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})