const Post = require('./Post');
const Profile = require('./Profile');
const Community = require('./Community');
const Poll = require('./Poll');

Post.belongsTo(Profile, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE',
});

Profile.hasMany(Post, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE',
});

Profile.belongsTo(Community,{
    foreignKey: 'community_id',
    onDelete: 'CASCADE',
});

Community.hasMany(Profile, {
    foreignKey: 'community_id',
    onDelete: 'CASCADE',
});

Poll.belongsTo(Profile, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
});

Profile.hasMany(Poll, {
    foreignKey: 'profile_id',
    onDelete: 'CASCADE'
});

module.exports = { Post, Profile, Community, Poll };