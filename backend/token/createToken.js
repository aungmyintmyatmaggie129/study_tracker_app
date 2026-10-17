const jwt = require('jsonwebtoken');

// const secrectToken = process.env.JWT_SECRECT_KEY;
const secrectToken = 'secrect_key';
const createToken = () => {
    try{
        let token = jwt.sign({foo: 'bar'},  secrectToken, { expiresIn : 60 * 60 * 24 * 5 });
    return token;
    }catch(error){
        return "Error while creating your token."
    }
}

module.exports = createToken;