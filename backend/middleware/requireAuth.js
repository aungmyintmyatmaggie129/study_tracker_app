const jwt = require('jsonwebtoken');
const User = require('../models/user');
const getJwtSecret = require('../token/getJwtSecret');

const requireAuth = async (req, res, next) => {
    const token = req.cookies?.jwt;
    if (!token) {
        return res.status(401).json({ message: 'Authentication required.' });
    }

    let payload;
    try {
        payload = jwt.verify(token, getJwtSecret());
    } catch (error) {
        if (error.message === 'JWT_SECRET is not configured.') {
            return res.status(500).json({ message: 'Authentication is not configured on the server.' });
        }
        return res.status(401).json({ message: 'Session is invalid or expired.' });
    }

    const user = await User.findById(payload.sub);
    if (!user) {
        return res.status(401).json({ message: 'Session is invalid or expired.' });
    }

    req.user = user;
    next();
};

module.exports = requireAuth;
