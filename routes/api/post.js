const router = require('express').Router();
const { Post, Profile } = require('../../models');

//create new post
router.post('/', async (req,res) => {

    try {
        const newPost = await Post.create(req.body);
        res.status(200).json(newPost);
        console.log('Successfully added to the database');
        
    } catch (error) {
        res.status(400).json(error);
    }
});

//delet an existing post 
router.delete('/:id', async (req,res) => {
    const postData = await Post.destroy({
        where: {

        }
    })
})

module.exports = router;