const jwt = require('jsonwebtoken');

function generateToken(user) {
    // what's included in the payload
    const payload = {
        subject: user.id,
        username: user.username,
    }
    const options = {
        expiresIn: '1d'
    }

    return jwt.sign(payload, process.env.SECRET, options);
};

module.exports = generateToken;