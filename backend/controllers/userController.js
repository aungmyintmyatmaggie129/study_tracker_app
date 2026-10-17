const User = require("../models/user");
const bcrypt = require('bcrypt');
const createToken = require("../token/createToken");
const userController = {
    get:  (req, res) => {
        // res.status(200).json({ message: "get All process is running" });
        let users =  User.find();
        res.status(200).json({"users": users});
    },
    login: async (req, res) => {
        const {email, password} = req.body;
        const user = await User.login(email, password);
        return res.status(200).json({"message": user});
    },
    register: async (req, res) => {
        try {
            const { name, email, password } = req.body;
            const user = await User.register(name, email, password);
            const responseUser = user.toObject();
            console.log("before delete:" + responseUser.password);
            delete responseUser.password;
            console.log("after delete:" + responseUser.password);
            let token = createToken();
            res.cookie('jwt', token, {maxAge: 60 * 60 * 24 * 5 * 1000, httpOnly: true})
            res.status(200).json({responseUser, token});
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }
}

module.exports = userController