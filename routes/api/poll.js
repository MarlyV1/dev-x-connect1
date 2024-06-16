const router = require('express').Router();
const { Post, Profile, Community, Poll } = require('../../models');

//GET request
router.get('/', async (req, res) => {
    try {
        const newPoll = await Poll.findAll({
            include: [{ model: Profile }]
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
    console.log(req.body);
    try {
        const newPoll = await Poll.create({ ...req.body, profile_id: req.session.user_id });
        res.status(200).json(newPoll);
        console.log('Successfully added a new poll');
    } catch (error) {
        res.status(400).json(error.message);
        console.log(error.message);
    }
});

//Delete an existing poll
router.delete("/:id", async (req, res) => {
    try {
        const postData = await Poll.destroy({
            where: {
                id: req.params.id,
            },
        });

        if (!postData) {
            res.status(404).json({ message: "No post found with that id" });
            return;
        }
    } catch (error) {
        res.status(500).json(error.message);
        console.log(error.message)
    }
});

module.exports = router;