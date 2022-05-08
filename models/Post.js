const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Post } = require('../routes/api/post-routes');

//Define post table columns
Post.init(
    {

    }
)

module.exports = Post;