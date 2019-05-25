const db = require('../database/dbConfig');

const userExists = async (username) => {
    let output;

    await db('users')
        .where({username})
        .then(user => {
            // denotes if username exists
            if(user.length){
                output = true
            } else {
                output = false
            }
        })
        // if user database can't be searched
        .catch(() => {
            throw "System could not search for users"
        })
    return output;
};

module.exports = userExists;