const express = require('express')
const path = require('path')

const app = express()

app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(process.env.REACT_APP_PORT || 5000, () => {
  console.log('Good Luck!')
})
