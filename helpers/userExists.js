const db = require('../database/dbConfig');

const userExists = async (email) => {
    let output;
    // formats added emails to be lowercase
    let formattedEmail = email.toLowercase()

    await db('users')
        .where({email: formattedEmail})
        .then(user => {
            // denotes if email exists
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

modules.export= userExists;