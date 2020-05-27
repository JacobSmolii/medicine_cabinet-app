const   auth_route = require('express').Router();
const db = require('../../db_modules');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
// const restricted = require('./restricted_middleware');

auth_route.post('/register', (req, res) => {
    try {
        const credentials = req.body;
        credentials.password = bcrypt.hashSync(credentials.password);

        db.addUser(credentials)
            .then(count => {
                res.status(201).json({
                    message: `${credentials.name} enjoy the App`,
                    // id: count
                })
            })
            .catch(err => {
                res.status(500).json({message: "Invalid credentials"});
            })
    } catch {
        res.status(500).json({message: "Invalid credentials you entered"});
    }
})

auth_route.post('/login', (req, res) => {
    try {
        const credential = req.body;
        db.getUserById(credential.email)
            .then(user => {
                console.log(credential.password, user.password)

                if (user && bcrypt.compareSync(credential.password, user.password)) {

                    const token = generateToken(user);
                    res.cookie('token', token);
                    res.status(200).json({message: `Welcome back ${user.name}`})
                }
            })
            .catch(err => {
                res.status(500).json({message: "Invalid credentials"});
            })
    } catch {
        res.status(500).json({message: "Invalid credentials"});
    }
})

function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.name,
    }

    const options = {
        expiresIn: '30m'
    }

    return jwt.sign(payload, process.env.JWT_SECRET, options);
}

module.exports = auth_route;