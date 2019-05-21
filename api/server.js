const express = require('express');
const knex = require('knex');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const knexConfig = require('../knexfile');
const db = knex(knexConfig.development);

const server = express()

server.use(express.json());
server.use(cors());

server.post('/api/signup', (req, res) => {
    const user = req.body

    user.password = bcrypt.hashSync(user.password, 10)

    db('users')
    .insert(user)
    .then(user => {
        res.status(201).json(user)
    })
})

const secret = 'remove this later'
function generateToken(user) {
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, secret, options);
}

server.post('/api/login', (req, res) => {
    const {username, password } = req.body

    db('users') .first()
    .where({username})
    .then(user => {
        if(user && bcrypt.compareSync(password, user.password)) {
            const token = generateToken(user);

            res.status(201).json({token})
        } else {
            res.status(401).send('Invalid credentials')
        }
    })
})

module.exports = server;