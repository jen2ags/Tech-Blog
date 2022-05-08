const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const { Post } = require('../routes/api/post-routes');

//Define post table columns
Post.init(
    {

    },
    {
        sequelize,
        freezeTableName: true,
        underscored: true,
        modelName: 'Post'
    }
)

module.exports = Post;