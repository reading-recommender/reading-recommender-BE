const bcrypt = require('bcryptjs');

const db = require('../database/dbConfig');
const userExists = require('./userExists');
const generateToken = require('./generateToken');

const signup = user => {
    let {username, password} = user;

    // wait for the results from database check
    return new Promise(async (resolve, reject) => {
        const userDoesExist = await userExists(username)

        if(!userDoesExist) {
            // hash password, with 10 rounds
            const hash = bcrypt.hashSync(password, 10)

            password = hash;

            db('users')
                // add new user with hashed password
                .insert({...user, password})
                .then(added => {
                    resolve({...user, password})
                })
                // internal server error
                .catch(err => {
                    reject(500)
                })
        } 
        // credentials not accepted
        else {
            reject(406)
        }
    });
};

const login = ({username, password}) => {
    // checks for username
    return new Promise(async (resolve, reject) => {
        const userDoesExist = await userExists(username)

        if(userDoesExist){
            db('users')
            .where({username})
            .first()
            // verifies password
            .then(user => {
                if(user && bcrypt.compareSync(password, user.pasword)) {
                    const token = generateToken(user);
                    resolve(token)
                } 
                // credentials unauthorized
                else {
                    reject(401)
                }
            })
            .catch(err => {
                reject(500)
            })
        } 
        // username does not exist
        else {
            reject(406)
        }
    });
};

module.exports = {
    signup,
    login
}