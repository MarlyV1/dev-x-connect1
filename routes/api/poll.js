const router = require('express').Router();
const { Post, Profile, Community, Poll } = require('../../models');

//GET request
router.get('/', async (req, res) => {
    try {
        const newPoll = await Poll.findAll({
            include: [{ model: Profile}]
        })
        console.log(newPoll);
        return res.status(200).json(newPoll);
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message);
    }
});

//POST request
router.post('/', async (req, res) => {
    try {
        const newPoll = await Poll.create(req.body);
        res.status(200).json(newPoll);
        console.log('Successfully added a new poll');
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message);
    }
});

module.exports = router;