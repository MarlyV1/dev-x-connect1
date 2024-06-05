const router = require('express').Router();

//create new post
router.post('/', async (req,res) => {
    const newPost = await Post.create({
        
    })
})

//delet an existing post 
router.delete('/:id', async (req,res) => {
    const postData = await Post.destroy({
        where: {

        }
    })
})

module.exports = router;