//TODO create Frontend using react in the frontend Dir
//then setup the concurency scripts to run front and backend
const express = require('express');
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const db = lowDb(new FileSync('db.json'))
db.defaults({ notes: []}).write()

const app = express();
app.use(express.json());

app.get('/notes', (req, res) => {
  const data = db.get("notes").value()
  return res.json(data)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});