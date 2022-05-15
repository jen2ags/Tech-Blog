const { Post } = require('../models');

const postData = [{
        title: 'Why use the MVC?',
        blog_text: 'Lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        user_id: 1

    },
    {
        title: 'Why aim for an MVP?',
        blog_text: 'Amet mi eget mauris pharetra.',
        user_id: 2
    },
    {
        title: 'Why use the CRUD method?',
        blog_text: 'Ut trus in mollis.',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;