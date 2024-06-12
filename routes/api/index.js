const router = require("express").Router();

//imports routes from their file
const profileRoutes = require('./profile');
const postRoutes = require('./post');
const communityRoutes = require('./community');

//middleware to direct it to correct path
router.use('/profiles', profileRoutes);
router.use('/posts', postRoutes);
router.use('/community', communityRoutes);


module.exports = router;
