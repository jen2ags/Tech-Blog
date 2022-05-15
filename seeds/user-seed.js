const sequelize = require('../config/connection');
const { User, Post } = require('../models');

const userData = [{
        username: 'aaron361',
        email: 'aaron@gmail.com',
        password: 'password98765'

    },
    {
        username: 'manny123',
        email: 'manny@gmail.com',
        password: 'password12345'
    },
    {
        username: 'karak',
        email: 'karak@gmail.com',
        password: 'password0157'
    }
];

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true});

module.exports = seedUsers;