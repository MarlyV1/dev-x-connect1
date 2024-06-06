const router = require('express').Router();
const Profile = require("../../models")
//route to create new user
router.post('/signup', async (req,res) => {
  const profileData = await Profile.create(req.body)
})

//route to login existing user
router.post('/login', async (req,res) => {
  const profileData = await Profile.findOne({where: {username:req.body.username}})
  if(!profileData){
    res.status(400).json({message:"incorrect username"})
    return
  }
  const checkpassword = await profileData.validatePassword(req.body.password)
  if(!checkpassword){
    res.status(400).json({message:"incorrect password"})
    return
  }
})


//route to find profile
router.get('/members/:id' , (req,res) => {
    
});

module.exports = router;