//TODO create Frontend using react in the frontend Dir
//then setup the concurency scripts to run front and backend
const express = require('express');
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const db = lowDb(new FileSync('db.json'))
db.defaults({ posts: []}).write()

const app = express();
app.use(express.json());

app.get('/login', (req, res) => {
  const data = db.get("posts").value()
  return res.json(data)
})

app.post('/register', (req, res) => {
  db.get("posts")
    .push(req.body)
    .write()
    console.log(req.body)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});