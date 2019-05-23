const express = require('express');
const {register, login}  = require('../helpers/usersAuthModel');

const router = express.Router();

// takes in username, password - responds with success message or conditional error message
router.post('/api/signup', async (req, res) => {
    let user = req.body

    // creates required fields
    const hasRequiredFields = !!(user.username && user.password);

    // checks if valid inputs are used in required fields
    if(!hasRequiredFields){
        res.status(401).json({
            message: "Username and email are required."
        });
    } 
    else {
        // create user if username is not taken
        try {
            await register(user);
            res.status(201).json({message: 'User is signed up!'});
        } catch (error) {
            if(error === 500 ) {
                res.status(500).json({message: 'Unable to register user.'});

            } else if(error === 406)  {
                res.status(406).json({message: 'Username is already taken'});
            }
        }
    }
});

// takes in username, password - responds with success message (or conditional error) and token
router.post('/api/login', async (req, res) => {
    let {username, password} = req.body

    // authenticate user if username and password is correct
    if(username && password) {
        try {
            const token = await login({username, password});
            res.status(201).json({
                token,
                message: 'User is logged in!'
            });
        } 
        catch (error) {
            if(error = 500){
                res.status(500).json({
                    message: 'Unable to log in user.'
                });
            } 
            else if(error = 401){
                res.status(401).json({
                    message: 'Invalid credentials. Please try again.'
                });
            }
        }
    } else {
        res.status(406).json({
            message: 'Please provide username and password.'
        });
    }
});

module.exports = router;