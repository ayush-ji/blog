const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

//This POST variable will provide dynamic port if available otherwise PORT = 3000;
const PORT = process.env.PORT || 3000;
const app = express();

//express settings
app.use(express.static('public'))
app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

//post route 
var postRoute = require(path.join(__dirname + '\\routes\\post'));

//home route
app.get('/', (req, res) => {
    console.log(__dirname)
    res.render('home', {pageTitle : 'Welcome'});
});

//about page
app.get('/about', (req, res) => {
    res.render('about');
})

//donate page
app.get('/donate', (req, res) => {
    res.render('donate');
})

//all route in postRoute will come after /post
app.use('/post', postRoute);


app.listen(PORT, () => {
    console.log('SERVER STARTED\nPORT:' + PORT);
})
