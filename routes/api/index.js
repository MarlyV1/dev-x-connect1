const router = require('express').Router();

//imports routes from thei file
const profileRoutes = require('./profile');
const postRoutes = require('./post');

//middleware to direct it to correct path
router.use('/profiles', profileRoutes);
router.use('/posts', postRoutes)

module.exports = router;