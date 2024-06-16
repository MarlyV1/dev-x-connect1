const router = require("express").Router();
const { Post, Profile } = require("../../models");

//Get all posts
router.get('/', async (req, res) => {
  try {
    const newPost = await Post.findAll({
    include: [{ model: Profile }]
  })
  res.status(200).json(newPost);
  } catch (error) {
    res.status(400).json(error.message)
    console.log(error.message)
  }
  
})

//Create new post
router.post('/', async (req, res) => {
  try {
    const newPost = await Post.create({...req.body, profile_id: req.session.user_id});
    res.status(200).json(newPost);
    console.log("Successfully added to the database");
  } catch (error) {
    res.status(400).json(error.message);
    console.log(error.message)
  }
});

//Delete an existing post
router.delete("/:id", async (req, res) => {
  try {
    const postData = await Post.destroy({
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
