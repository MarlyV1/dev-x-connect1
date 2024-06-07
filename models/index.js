const Post = require('./Post');
const Profile = require('./Profile');

Post.belongsTo(Profile, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

Profile.hasMany(Post, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
})

module.exports = { Post, Profile };