const express = require('express');
const router = express.Router();
const Story = require('../models/Story');
const { ensureAuthenticated, ensureGuest } = require('../helper/auth');


router.get('/', ensureGuest, (req, res) => {
    res.render('index/welcome');
})

router.get('/dashboard', ensureAuthenticated, (req, res) => {
    Story.find({ user: req.user.id })
        .then(stories => {
            res.render('index/dashboard', {
                stories: stories 
            });
        })

})

router.get('/about', (req, res) => {
    res.render('index/about');
})

module.exports = router;