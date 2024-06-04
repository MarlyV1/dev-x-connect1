const router = require("express").Router();
const apiRoutes = require ('./api');

router.use('/api', apiRoutes);

//I am not sure if this goes here or not?
router.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});


module.exports = router;