const express = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const db = require('../database/dbConfig');
const getBookRecommendation = require('../helpers/getBookPrediction');

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

server.post("/recommend", async (req, res) => {
    const {
        q1,
        q2,
        q3,
        q4,
        q5,
        q6
    } = req.body;
  
    const answers = {
     q1,
     q2,
     q3,
     q4,
     q5,
     q6
    };

    const recommendation = await getBookRecommendation(answers);
        try{
            if (recommendation) {
              res.status(200).json({ ...recommendation});
            } else {
              throw "Please answer all the questions";
            }
        } catch (error) {
      res.status(500).json({
        message: "Error recommending book"
      });
    }
  });
module.exports = server;