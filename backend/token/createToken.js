const jwt = require('jsonwebtoken');
const getJwtSecret = require('./getJwtSecret');

const createToken = (userId) => {
    return jwt.sign({ sub: String(userId) }, getJwtSecret(), { expiresIn: '5d' });
};

module.exports = createToken;