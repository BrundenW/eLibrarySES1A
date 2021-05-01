const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const blogRoutes = require('./routes/blogRoutes');
const registerRoutes = require('./routes/registerRoutes');

// express app
const app = express();

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://eLibrary:eL123456@cluster0.tb5f9.mongodb.net/eLibrary?retryWrites=true&w=majority";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(result => app.listen(3000))
    .catch(err => console.log(err));

// view engine
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
    res.locals.path = req.path;
    next();
});
// register routes
app.use('/register', registerRoutes)
    // routes
app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

// blog routes
app.use('/blogs', blogRoutes);



// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});