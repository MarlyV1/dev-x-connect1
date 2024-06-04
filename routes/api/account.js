const router = require('express').Router();


router.post('/signup', (req,res) => {
    const newMember = {
        first_name : firstName,
        last_name : lastName,
        username: username,
        password: password,
        cohort: cohort,
        id: id
    }
})

router.get('/members/:id' , (req,res) => {
    const found = members.some(member => member.id === parseInt(req.params.id))
    if (found) {
        res.json(members.filter(member => member.id === parseInt(req.params.id)))
    } else {
        res.status(400).json({ message: 'Member not found'})
    }
});