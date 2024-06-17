const router = require('express').Router();
const { Community, Profile } = require('../../models')

// find ALL communites
router.get('/community', async (req,res) => {
    const communities = await Community.findAll();
    res.json(communities);
});

// find one community by Id
router.get('/community/:id', async (req,res) => {
    const community = await Community.findByPk(req.params.id);
    res.json(community);
});

module.exports = router;