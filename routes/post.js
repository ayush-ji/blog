const express = require('express');
const router = express.Router();

router.get('/new', (req, res) => {
    res.render('compose');
})

router.get('/:post', (req, res) => {

})

module.exports = router;