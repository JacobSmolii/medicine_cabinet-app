const home_route = require('express').Router()
const db = require('../db_modules')

home_route.get('/',(req, res) => {
    db.getCannabisList()
        .then(list => {
            res.status(200).json({list})
        })
        .catch(err => {
            res.status(500).json({error:"Error because",err})
        })
})

home_route.post('/', (req, res) => {
    const data = req.body;

    db.get_specific_type(data)
        .then(list => {
            res.status(200).json(list);
        })
        .catch(err => {
            res.status(500).json({error:"Some Error ",err})
        })
})

home_route.post('/:id',(req, res) => {
    const data = req.body;
    const {id} = req.params;

    db.addLiked(id, data.strain)
        .then(() => {
            res.status(201).json({ message: `You liked ${data.strain}`})
        })
        .catch(err => {
            res.status(500).json({error:"Can not add like cause",err})
        })
})

home_route.get('/:id/liked',(req, res) => {
    const {id} = req.params;

    db.getLiked(id)
        .then(liked => {
            res.status(200).json({liked})
        })
        .catch(err => {
            res.status(500).json({ error:"Can not add like cause",err })
        })
})

home_route.post('/:id/liked/:liked_id',(req, res) => {
    const {liked_id} = req.params;
    const data = req.body

    db.addFeedBackBySpecificType(liked_id, data.what_treated_name)
        .then(feed => {
            res.status(201).json({ message: 'Thank you for your feedback' })
        })
        .catch(err => {
            res.status(500).json({ message:"Sorry,Can not add feedback",err })
        })
})

home_route.get('/:id/treated', (req, res) => {
    db.getAllTreated()
        .then(respond => {
            res.status(200).json(respond)
        })
        .catch(err => {
            res.status(500).json({ message:"Sorry,Can not add feedback",err })
        })
})

home_route.delete('/:id',(req, res) => {
   const {id} = req.params;

    db.deleteUser(id)
        .then(user => {
            res.status(200).json({message:`User ${id} has been  deleted`})
        })
        .catch(err => {
            res.status(500).json({ message:"Sorry,can not delete user",err })
        })
})

home_route.put('/:id',(req, res) => {
    const {id} = req.params;

    const data = req.body;

    db.editUser(id, data)
        .then(() => {
            res.status(200).json({ message: "User information updated" })
        })
        .catch(err => {
            res.status(204).json({message:"Can not update info because",err})
        })
})

home_route.get('/users', (req, res) => {
    db.getAllUsers()
        .then(users => {
            res.status(200).json(users);
        })
        .catch(err => {
            res.status(500).json({message:"Cannot fetch users",err})
        })
}) // FOR personal uses do not for production

module.exports = home_route;
