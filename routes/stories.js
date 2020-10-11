const express = require('express');
const router = express.Router();
const { ensureAuthenticated, ensureGuest } = require('../helper/auth');
const Story = require('../models/Story');
const User = require('../models/User');


router.get('/', (req, res) => {
    Story.find({ status: 'public' })
        .populate('user')
        .sort({ date: 'desc' })
        .then(stories => {
            res.render('stories/index', {
                stories: stories
            });
        })
});

router.get('/add', ensureAuthenticated, (req, res) => {
    res.render('stories/add');
});

router.post('/', (req, res) => {
    let allowComments = false;
    if (req.body.allowComments) {
        allowComments = true;
    }
    const newStory = {
        title: req.body.title,
        body: req.body.body,
        status: req.body.status,
        allowComments: allowComments,
        user: req.user.id
    }
    new Story(newStory).save()
        .then(story => {
            res.redirect(`/stories/show/${story.id}`);
        });
});


router.get('/edit/:id', ensureAuthenticated, (req, res) => {
    Story.findOne({ _id: req.params.id })
        .then(story => {
            if (story.user != req.user.id) {
                res.redirect('/stories');
            } else {
                res.render('stories/edit', {
                    story: story
                });
            }

        });
});
router.get('/show/:id', (req, res) => {
    Story.findOne({ _id: req.params.id })
        .populate('user')
        .populate('comments.commentUser')
        .then(story => {
            if (story.status == 'public') {
                res.render('stories/show', {
                    story: story
                });
            } else {
                if (req.user) {
                    if (req.user.id == story.user._id) {
                        res.render('stories/show', {
                            story: story
                        });
                    } else {
                        res.redirect('/stories');
                    }
                } else {
                    res.redirect('/stories');
                }
            }
        });
});
router.get('/my/', ensureAuthenticated, (req, res) => {
    Story.find({ user: req.user.id })
        .populate('user')
        .then(stories => {
            res.render('stories/index', {
                stories: stories
            });
        });
});

router.get('/user/:userId', (req, res) => {
    Story.find({ user: req.params.userId, status: 'public' })
        .populate('user')
        .then(stories => {
            res.render('stories/index', {
                stories: stories
            });
        });
});

router.put('/:id', (req, res) => {
    Story.findOne({ _id: req.params.id })
        .then(story => {
            let allowComments = false;
            if (req.body.allowComments) {
                allowComments = true;
            }
            story.title = req.body.title;
            story.body = req.body.body;
            story.status = req.body.status;
            story.allowComments = allowComments;
            story.save()
                .then(story => {
                    res.redirect('/dashboard');
                })

        });
});

router.delete('/:id', (req, res) => {
    Story.deleteOne({ _id: req.params.id })
        .then(() => {
            res.redirect('/dashboard');
        });
});

router.post('/comment/:id', (req, res) => {
    Story.findOne({ _id: req.params.id })
        .then(story => {
            const newComment = {
                commentBody: req.body.commentBody,
                commentUser: req.user.id
            }
            story.comments.unshift(newComment);

            story.save()
                .then(story => {
                    res.redirect(`/stories/show/${story.id}`);
                });
        });
});


module.exports = router;