const router = require('express').Router();

router.get('/', (req,res) => {
    res.render('homepage',{
        id: 1,
        title: 'Cool Kicks',
        blog_text: 'Look at these awesome new cases for your tech!',
        created_at: new Date(),
        comments: [{}, {}],
        user: {
            username: 'tech_junkie'
        }
    });
});

module.exports = router;