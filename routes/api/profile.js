const router = require("express").Router();
const { Profile } = require("../../models");
//route to create new user
router.post("/signup", async (req, res) => {
  try {
    const profileData = await Profile.create(req.body);
    console.log(profileData);
    req.session.save(() => {
      req.session.user_id = profileData.id;
      req.session.logged_in = true;

      res.status(200).json(profileData);
    });
  } catch (err) {
    res.status(400).json(err);
  }
});
 
//route to login existing user
router.post("/login", async (req, res) => {
  const profileData = await Profile.findOne({
    where: { username: req.body.username },
  });
  if (!profileData) {
    res.status(400).json({ message: "incorrect credentials" });
    return;
  }
  const checkpassword = await profileData.validatePassword(req.body.password);
  if (!checkpassword) {
    res.status(400).json({ message: "incorrect credentials" });
    return;
  }
  req.session.save(() => {
    req.session.user_id = profileData.id;
    req.session.logged_in = true;

    res.json({ user: profileData, message: "You are now logged in!" });
  });
});

//route to find profile
router.get("/profile/:username", async (req, res) => {
  const profileData = await Profile.findOne({
    where: { username: req.body.username },
    include: [{ model: Post }],
  });
  if (!profileData) {
    res.status(404).json({ message: "User not found" });
    return;
  }
  res.status(200).json(profileData);
});

module.exports = router;
