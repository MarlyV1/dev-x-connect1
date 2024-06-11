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
})

// Join a community
router.post('/community/:id/join', async (req,res) => {
    const userId = req.body.userId;
    const user = await Profile.findByPk(userId);

    if(!user) {
        return res.status(404).json({message: "User not found"})
    }
    await user.setGroup(req.params.id);
    res.json({message: 'Successfully joined the community!'})
});

//Leave a community
router.delete('/community/leave', async (req,res) => {
    const userId = req.body.userId;
    const user = await 
    
})