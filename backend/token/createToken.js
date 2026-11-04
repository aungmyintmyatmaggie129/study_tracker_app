const jwt = require('jsonwebtoken');

const createToken = (userId) => {
    const secret = process.env.JWT_SECRET;
    if (!secret) {
        throw new Error('JWT_SECRET is not configured.');
    }

    return jwt.sign({ sub: String(userId) }, secret, { expiresIn: '5d' });
};

module.exports = createToken;