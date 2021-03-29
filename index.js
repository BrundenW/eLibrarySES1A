//TODO create Frontend using react in the frontend Dir
//then setup the concurency scripts to run front and backend
const express = require('express');
const app = express();

app.use(express.json());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`app running on port ${PORT}`)
});