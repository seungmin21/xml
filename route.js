const express = require('express');
const router = express.Router();
const path = require('path')

// index.html 파일 구동
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'))
});


// json 파일
router.get('/sub', (req,res) => {
  const filePath = path.join(__dirname, 'test.json');
  res.sendFile(filePath);
});

module.exports = router;