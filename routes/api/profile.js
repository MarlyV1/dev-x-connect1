const router = require('express').Router();

//route to create new user
router.post('/signup', async (req,res) => {
  const profileData = await Profile.create(req.body)
})

//route to login existing user
router.post('/login', async (req,res) => {
  const profileData = await Profile.findOne({where: {}})
})

//route to find profile
router.get('/members/:id' , (req,res) => {
    
});

module.exports = router;