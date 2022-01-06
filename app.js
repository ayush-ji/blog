const express = require('express');
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const path = require('path')
const app = express();
var postRoute = require(path.join(__dirname + '\\routes\\post'));
app.use(express.static('public'))

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended:true}));

app.get('/', (req, res) => {
    console.log(__dirname)
    res.render('home', {pageTitle : 'Welcome'});
});

app.get('/about', (req, res) => {
    res.render('about');
})

app.get('/donate', (req, res) => {
    res.render('donate');
})

app.use('/post', postRoute);

app.listen(3000, () => {
    console.log('SERVER STARTED\nPORT:' + PORT);
})
