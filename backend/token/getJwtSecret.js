const getJwtSecret = () => {
    const secret = process.env.JWT_SECRET || process.env.JWT_SECRECT;
    if (!secret) {
        throw new Error('JWT_SECRET is not configured.');
    }

    return secret;
};

module.exports = getJwtSecret;
