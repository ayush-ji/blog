const express = require('express');
const router = express.Router();
const Blog = require('../models/blog');
const mongoose = require('mongoose');
var url = "mongodb://localhost:27017/ayushji-blog";

mongoose.connect(url , (_ , _a_) => {
    console.log('server connecred');
})

router.get('/new', (req, res) => {
    res.render('compose');
})

router.get('/:post', (req, res) => {
    
})

router.post('/new', (req, res) => {
    var authorName = req.body.authorName;
    var blogTitle = req.body.blogTitle;
    var blogSubTitle = req.body.subTitle;
    var description = req.body.description;

    var [date, time] =  new Date().toLocaleString().split(',');

    var newBlog = new Blog(
        {
            name : authorName,
            title : blogTitle,
            subTitle : blogSubTitle,
            description: description,
            publishedOn : {
                date : date,
                time : time
            }
        }
    )
        console.log(newBlog)
    newBlog.save();
})

module.exports = router;