//TODO create Frontend using react in the frontend Dir
//then setup the concurency scripts to run front and backend
const express = require('express');
const lowDb = require("lowdb")
const FileSync = require("lowdb/adapters/FileSync")

const db = lowDb(new FileSync('db.json'))
db.defaults({ accounts: []}).write()

const app = express();

app.set('views', __dirname + '/frontend/views');
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'html');

app.use(express.json());

app.get('/login', (req, res) => {
  const data = db.get("posts").value()
  return res.json(data)
})

app.get('/register', (req, res) => {
  res.render("register");
})


app.post('/register', (req, res) => {

  db.get("accounts")
    .push(req.body)
    .write()
    console.log(req.body)
})

app.post('/login', (req, res) => {
  db.get("accounts")
  let loginAcc = req.body
  //TODO FIX 
  if(!(db.find(acc => (acc.password === loginAcc.password && acc.username === loginAcc.username)) === null)) {
    return res.render("main")
  }
    console.log(db.accounts)
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});