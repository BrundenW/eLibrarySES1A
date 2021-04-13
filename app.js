const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
//const Blog = require('./models/blog');
//const blogRoutes = require('./routes/blogRoutes');
const { result } = require('lodash');

// express app
const app = express();

// connection to mongodb
const dbURI = 'mongodb+srv://eLibrary:eL123456@cluster0.tb5f9.mongodb.net/eLibraryServer?retryWrites=true&w=majority';
mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true });

const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://eLibrary:eL123456@cluster0.tb5f9.mongodb.net/eLibraryServer?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
client.connect(err => {
    const collection = client.db("test").collection("devices");
    client.close();
});
app.listen(3000);

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));










// 404 page
app.use((req, res) => {
    res.status(404).render('404', { title: '404' });
});